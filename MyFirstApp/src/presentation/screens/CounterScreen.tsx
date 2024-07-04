import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';

export const CounterScreen = () => {

    const [count, setCount] = useState(10);


    const onPress = () => setCount((count) => count + 1)

    const onLongPress = () => setCount(0);

    return (
        <View style={styles.container}>

            <Text style={styles.title} > {count} </Text>

            {/* <PrimaryButton label='Incrementar' onPress={onPress} onLongPress={onLongPress} /> */}

            <Button onPress={onPress} onLongPress={onLongPress} mode='contained'>
                Incrementar
            </Button>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    }
});