import React, { PropsWithChildren, useContext } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { ThemeContextProps, ThemeContext } from '../../context/ThemeContext';

interface Props extends PropsWithChildren {
    style?: StyleProp<ViewStyle>;
}

export const Card = ({ style, children }: Props) => {

    const { colors } = useContext<ThemeContextProps>(ThemeContext);

    return (
        <View style={[
            {
                backgroundColor: colors.cardBackground,
                borderRadius: 10,
                padding: 10
            },
            style
        ]}>

            {children}

        </View >
    )
}