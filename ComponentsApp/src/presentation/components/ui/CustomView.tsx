import React, { useContext } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme'
import { ThemeContext, ThemeContextProps } from '../../context/ThemeContext';

interface Props {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    margin?: boolean
}

export const CustomView = ({ style, children, margin = false }: Props) => {

    const { colors } = useContext<ThemeContextProps>(ThemeContext);

    return (
        <View style={[
            globalStyles.mainContainer,
            margin ? globalStyles.globalMargin : null,
            {
                backgroundColor: colors.background
            },
            style
        ]} >
            {children}
        </View>
    )
}
