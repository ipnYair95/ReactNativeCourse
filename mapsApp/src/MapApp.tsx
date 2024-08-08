import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { PermissionsChecker } from './presentation/providers/PermissionsChecker';

export const MapApp = () => {
    return (
        <NavigationContainer>
            <PermissionsChecker>
                <StackNavigator />
            </PermissionsChecker>
        </NavigationContainer>
    )
}
