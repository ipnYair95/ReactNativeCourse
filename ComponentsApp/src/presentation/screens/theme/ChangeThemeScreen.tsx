import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { Button } from '../../components/ui/Button'
import { ThemeContext, ThemeContextProps } from '../../context/ThemeContext'

export const ChangeThemeScreen = () => {

    const { setTheme, currentTheme, colors } = useContext<ThemeContextProps>(ThemeContext);

    return (
        <CustomView margin >

            <Title text={`Cambia el tema ${currentTheme}`} safe />

            <Button
                text='Light'
                onPress={() => setTheme('light')}
            />

            <View style={{
                height: 10
            }} />

            <Button
                text='Dark'
                onPress={() => setTheme('dark')}
            />

            <Text style={{
                color: colors.text
            }} >
                {JSON.stringify(colors, null, 4)}
            </Text>

        </CustomView>
    )
}
