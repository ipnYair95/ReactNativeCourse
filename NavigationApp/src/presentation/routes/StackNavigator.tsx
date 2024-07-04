import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home/Home';
import { Products } from '../screens/products/Products';
import { Settings } from '../screens/settings/Settings';
import { Product } from '../screens/products/Product';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export type RootStackParams = {
    Home: undefined;
    Product: { id: number, name: string },
    Products: undefined;
    Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    const navigator = useNavigation();

    useEffect(() => {

        navigator.setOptions({
            headerShown: false
        })

    }, [])


    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
            }
        }} >

            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Settings" component={Settings} />

        </Stack.Navigator>
    );
}