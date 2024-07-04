import React, { useContext, useRef } from 'react'
import { Pressable, StyleSheet, View, Text, Animated, Easing } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation';
import { colors } from '../../../config/theme/theme';
import { ThemeContextProps, ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';


export const Animation101Screen = () => {

    const { animatedTop, animtedOpacity, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();

    const { colors } = useContext<ThemeContextProps>(ThemeContext);

    return (
        <CustomView style={styles.container}>

            <Animated.View style={[
                styles.purpleBox,
                {
                    backgroundColor: colors.primary,
                    opacity: animtedOpacity,
                    transform: [
                        {
                            translateY: animatedTop
                        }
                    ]
                }
            ]}>

            </Animated.View>

            <Pressable onPress={() => {
                fadeIn({});
                startMovingTopPosition({
                    initialPosition: -100,
                    easing: Easing.elastic(2),
                    duration: 750
                })
            }} style={{ marginTop: 10 }} >
                <Text style={{ color: colors.text }} >  FadeIn </Text>
            </Pressable>

            <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }} >
                <Text style={{ color: colors.text }} >  FaeOut </Text>
            </Pressable>

        </CustomView>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    purpleBox: {
        width: 150,
        height: 150
    }
});