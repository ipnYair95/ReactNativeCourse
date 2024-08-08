import { createStackNavigator } from '@react-navigation/stack';
import { Loading } from '../screens/loading/Loading';
import { Maps } from '../screens/maps/Maps';
import { Permissions } from '../screens/permissions/Permissions';

export type RootStackParams = {
    LoadingScreen: undefined;
    PermissionsScreen: undefined;
    MapScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
            initialRouteName='LoadingScreen'
        >
            <Stack.Screen name="LoadingScreen" component={Loading} />
            <Stack.Screen name="MapScreen" component={Maps} />
            <Stack.Screen name="PermissionsScreen" component={Permissions} />
        </Stack.Navigator>
    );
}