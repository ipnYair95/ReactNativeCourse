import React, { useContext } from 'react'
import { Alert, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Button } from '../../components/ui/Button'
import prompt from 'react-native-prompt-android';
import { showPrompt } from '../../../config/adapters/prompt.adapter'
import { ThemeContextProps, ThemeContext } from '../../context/ThemeContext'

export const AlertScreen = () => {

    const { isDark } = useContext<ThemeContextProps>(ThemeContext);

    const createTwoButtonAlert = () => {

        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
            {
                userInterfaceStyle: isDark ? 'dark' : 'light',
            }
        );

    }



    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
        ], {
            userInterfaceStyle: isDark ? 'dark' : 'light',
            cancelable: true,
            onDismiss: () => console.log('onDismiss'),
        });

    const onShowPrompt = () => {

        showPrompt({
            title: 'Lorem',
            subTitle: 'Subtitle',
            buttons: [
                { text: 'Ok', onPress: () => console.log('Ok Pressed') }
            ],
            placeholder: 'Placeholder',
        });


        /*  Alert.prompt(
             'Cual es tu correo?',
             'Lorem',
             (valor: string) => console.log(valor),     
             'secure-text',
             'Soy el valor por defecto',
             'number-pad'
         ); */



    }


    return (
        <CustomView style={globalStyles.globalMargin} >

            <Title text='Alertas' safe />

            <Button text='Alerta - 2 botones' onPress={createTwoButtonAlert} />

            <View style={{ height: 20 }} />

            <Button text='Alerta - 3 botones' onPress={createThreeButtonAlert} />

            <View style={{ height: 20 }} />

            <Button text='Prompt' onPress={onShowPrompt} />

        </CustomView>
    )
}
