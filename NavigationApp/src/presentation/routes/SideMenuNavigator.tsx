import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Profile } from '../screens/profile/Profile';
import { globalColors } from '../theme/theme';
import { Text, View, useWindowDimensions } from 'react-native';
import { ButtonTabs } from './ButtonTabs';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: dimensions.width >= 758 ? 'permanent' : 'slide',
                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: globalColors.primary,
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20
                }
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
            <Drawer.Screen name="Tabs" component={ButtonTabs} options={{
                drawerIcon: ({ color }) => <IonIcon name="bonfire-outline" color={color} />
            }} />
            <Drawer.Screen name="Profile" component={Profile} options={{
                drawerIcon: ({ color }) => <IonIcon name="person-outline" color={color} />
            }} />
        </Drawer.Navigator>
    );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {



    return (
        <DrawerContentScrollView>

            <View style={{
                height: 200,
                backgroundColor: globalColors.primary,
                margin: 30,
                borderRadius: 50
            }} />

            <DrawerItemList {...props} />

            <Text> Hola mundo </Text>

        </DrawerContentScrollView>
    );

}