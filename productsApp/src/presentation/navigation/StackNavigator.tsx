import {
    createStackNavigator,
    StackCardStyleInterpolator
} from '@react-navigation/stack';
import { Loading } from '../screens/loading/Loading';
import { Login } from '../screens/auth/Login';
import { Register } from '../screens/auth/Register';
import { Home } from '../screens/home/Home';
import { Product } from '../screens/product/Product';

export type RootStackParams = {
    LoadingScreen: undefined;
    LoginScreen: undefined;
    RegisterScreen: undefined;
    HomeScreen: undefined;
    ProductScreen: { productId: string };
};

const Stack = createStackNavigator<RootStackParams>();

const fadeAnimation: StackCardStyleInterpolator = ({ current }) => {
    return {
        cardStyle: {
            opacity: current.progress,
        },
    };
};

export const StackNavigator = () => {
    return (

        <Stack.Navigator
            initialRouteName="LoadingScreen"
            screenOptions={{
                headerShown: false,
                //cardStyleInterpolator: fadeAnimation
            }}>

            <Stack.Screen
                options={{ cardStyleInterpolator: fadeAnimation }}
                name="LoadingScreen"
                component={Loading}
            />

            <Stack.Screen
                options={{ cardStyleInterpolator: fadeAnimation }}
                name="LoginScreen"
                component={Login}
            />

            <Stack.Screen
                options={{ cardStyleInterpolator: fadeAnimation }}
                name="RegisterScreen"
                component={Register}
            />
            <Stack.Screen
                options={{ cardStyleInterpolator: fadeAnimation }}
                name="HomeScreen"
                component={Home}
            />

            <Stack.Screen name="ProductScreen"
                component={Product}
            />

        </Stack.Navigator>
    );
};
