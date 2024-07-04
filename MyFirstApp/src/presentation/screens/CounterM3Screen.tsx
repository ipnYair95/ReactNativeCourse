import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { GlobalStyles } from '../theme/global.styles';
import { FAB as Fab } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {

    const [count, setCount] = useState(10);

    return (
        <View style={GlobalStyles.centerContainer}>

            <Text style={GlobalStyles.title} > {count} </Text>

            <Icon name="accessibility-outline" size={25}/>

            <Fab                
                style={GlobalStyles.fab}
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
                icon='add'
            />

        </View>
    )
}

