import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from '../screens/tabs/Tab1';
import { Tab2 } from '../screens/tabs/Tab2';
import { Tab3 } from '../screens/tabs/Tab3';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TobTabsNavigador } from './TobTabsNavigador';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const ButtonTabs = () => {


    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: globalColors.backgroundColor
            }}
            screenOptions={{
                //headerShown: false,
                tabBarActiveTintColor: globalColors.primary,
                tabBarLabelStyle: {
                    marginBottom: 5
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent'
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0
                }
            }}
        >
            <Tab.Screen
                name="Tab1"
                options={{ title: 'Tab1', tabBarIcon: ({ color }) => (<IonIcon name="accessibility-outline" color={color} />) }}
                component={Tab1}
            />

            <Tab.Screen
                name="Tab2"
                options={{ title: 'Tab2', tabBarIcon: ({ color }) => (<IonIcon name="airplane-outline" color={color} />) }}
                component={TobTabsNavigador}
            />

            <Tab.Screen
                name="Tab3"
                options={{ title: 'Tab3', tabBarIcon: ({ color }) => (<IonIcon name="bar-chart-outline" color={color} />) }}
                component={StackNavigator}
            />
        </Tab.Navigator>
    );

}
