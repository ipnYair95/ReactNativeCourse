import { useRef } from "react";
import { Animated, Easing } from "react-native";


export const useAnimation = () => {

    const animtedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({ duration = 300, toValue = 1, callback = () => { } }) => {

        /*  Animated.timing(animatedTop, {
             toValue: 0,
             duration: 700,
             useNativeDriver: true,
             easing: Easing.bounce
         }).start(() => {
             console.log('Animation ended')
         }); */

        Animated.timing(animtedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true
        }).start(callback);

    }

    const fadeOut = ({ duration = 300, toValue = 0, callback = () => { } }) => {

        Animated.timing(animtedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true
        }).start(callback);

    }

    const startMovingTopPosition = ({ initialPosition = 0, duration = 300, easing = Easing.linear, toValue = 0, callback = () => { } }) => {

        animatedTop.setValue(initialPosition);

        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
            easing
        }).start(callback);

    }


    return {
        animtedOpacity,
        animatedTop,
        fadeIn,
        fadeOut,
        startMovingTopPosition
    }
}
