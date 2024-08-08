import React, { useEffect, useRef, useState } from 'react'
import { Platform, StyleSheet } from 'react-native'
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps'
import { Location } from '../../../infrastructure/interfaces/location';
import { FAB } from '../ui/FAB';
import { useLocationStore } from '../../store/location/useLocationStore';

interface Props {
    showUserLocation?: boolean;
    initialLocation: Location;
}

export const Map = ({ showUserLocation = true, initialLocation }: Props) => {

    const mapRef = useRef<MapView | null>();

    const cameraLocation = useRef<Location>(initialLocation);

    const [isFollowingUser, setIsFollowingUser] = useState(true);

    const [isShowingPolyline, setIsShowingPolyline] = useState(true);

    const { getLocation, lastKnownLocation, watchLocation, clearWatchLocation, userLocationsList } = useLocationStore();


    const moveCameraToLocation = (location: Location) => {

        if (!mapRef.current) {
            return;
        }

        mapRef.current.animateCamera({
            center: location
        });


    }

    const moveToCurrentLocaiton = async () => {

        if (!lastKnownLocation) {
            moveCameraToLocation(initialLocation);
        }

        const location = await getLocation();

        location && moveCameraToLocation(location);

    }


    useEffect(() => {

        watchLocation();

        return () => {
            clearWatchLocation();
        }


    }, [])

    useEffect(() => {

        if (lastKnownLocation && isFollowingUser) {
            moveCameraToLocation(lastKnownLocation);
        }

    }, [lastKnownLocation, isFollowingUser])


    return (
        <>
            <MapView
                ref={(map) => mapRef.current = map!}
                showsUserLocation={showUserLocation}
                provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ flex: 1 }}
                onTouchStart={() => setIsFollowingUser(false)}
                region={{
                    latitude: cameraLocation.current.latitude,
                    longitude: cameraLocation.current.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >

                {
                    isShowingPolyline && <Polyline coordinates={userLocationsList} strokeColor='black' strokeWidth={5} />
                }

                {/* <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title="Este es el título del mark"
                    description="Este es la descripción del mark"
                    image={require('../../../assets/marker.png')}
                /> */}

            </MapView>

            <FAB
                iconName={isShowingPolyline ? 'eye-outline' : 'eye-off-outline'}
                onPress={() => setIsShowingPolyline(!isShowingPolyline)}
                style={{ position: 'absolute', bottom: 140, right: 20 }}
            />

            <FAB
                iconName={isFollowingUser ? 'walk-outline' : 'accessibility-outline'}
                onPress={() => setIsFollowingUser(!isFollowingUser)}
                style={{ position: 'absolute', bottom: 80, right: 20 }}
            />

            <FAB
                iconName='compass-outline'
                onPress={moveToCurrentLocaiton}
                style={{ position: 'absolute', bottom: 20, right: 20 }}
            />

        </>
    )
}
