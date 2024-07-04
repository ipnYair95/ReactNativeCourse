import React, { useContext } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { ThemeContextProps, ThemeContext } from '../../context/ThemeContext';

interface Props {
    style?: StyleProp<ViewStyle>;
}

export const Separator = ({ style }: Props) => {

    const { colors } = useContext<ThemeContextProps>(ThemeContext);

    return (
        <View style={{
            backgroundColor: colors.cardBackground
        }}>
            <View style={[
                {
                    alignSelf: 'center',
                    width: '80%',
                    height: 1,
                    backgroundColor: colors.text,
                    opacity: 0.1,
                    marginVertical: 8
                },
                style
            ]}>
            </View>
        </View>
    )
}
