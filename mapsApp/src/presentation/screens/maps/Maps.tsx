import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useLocationStore } from '../../store/location/useLocationStore'
import { Loading } from '../loading/Loading';
import { Map } from '../../components/maps/Map';

export const Maps = () => {

    const { lastKnownLocation, getLocation } = useLocationStore();

    useEffect(() => {

        if( !lastKnownLocation ){
            getLocation();
        }
     
    }, [])
    

    if (!lastKnownLocation) {
        return <Loading />
    }

    return (
        <View style={styles.container}>

            <Map initialLocation={lastKnownLocation} />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    }
});