import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native";
import { colors, globalStyles } from "../../../config/theme/theme";
import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../../context/ThemeContext";

interface Props {
    text: string;
    styles?: StyleProp<ViewStyle>;
    onPress: () => void

}

export const Button = ({ text, styles, onPress }: Props) => {

    const { colors } = useContext<ThemeContextProps>(ThemeContext);

    return (
        <Pressable onPress={onPress} style={({ pressed }) => ([
            globalStyles.btnPrimary,
            styles,
            {
                opacity: pressed ? 0.8 : 1,
                backgroundColor: colors.primary
            },
        ])}>

            <Text style={[
                globalStyles.btnPrimaryText,
                {
                    color: colors.buttonTextColor
                }
            ]} >
                {text}
            </Text>
        </Pressable>
    )
}
