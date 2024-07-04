import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Profile } from '../screens/profile/Profile';
import { About } from '../screens/about/About';
import { HamburguerMenu } from '../components/shared/HamburguerMenu';


const Tab = createMaterialTopTabNavigator();

export const TobTabsNavigador = () => {
    return (
        <>
            <HamburguerMenu />
            <Tab.Navigator>
                <Tab.Screen name="Perfil" component={Profile} />
                <Tab.Screen name="About" component={About} />
            </Tab.Navigator>
        </>
    )
}
