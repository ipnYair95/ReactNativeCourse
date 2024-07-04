import { useState } from "react";
import { ActivityIndicator, Animated, View } from "react-native";
import { useAnimation } from "../../hooks/useAnimation";

interface Props {
    uri: string;
    style?: any;
}

export const FadeInImage = ({ uri, style }: Props) => {

    const [isLoading, setIsLoading] = useState(true);

    const { animtedOpacity, fadeIn } = useAnimation();

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }} >

            {
                isLoading &&
                <ActivityIndicator style={{
                    position: 'absolute'
                }}
                    color="gray"
                    size={30}
                />
            }

            <Animated.Image source={{ uri }}
                onLoadEnd={() => {
                    fadeIn({ duration: 1000 });
                    setIsLoading(false);

                }}
                style={[
                    style,
                    {
                        opacity: animtedOpacity,
                    }
                ]} />



        </View>
    )
}
