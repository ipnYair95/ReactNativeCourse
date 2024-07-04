import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { IonIcon } from "./IonIcon";
import { globalColors } from "../../theme/theme";


export const HamburguerMenu = () => {

    const navigation = useNavigation();

    return (
        <Pressable style={{ marginLeft: 5 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)} >
            <IonIcon name="menu-outline" color={ globalColors.primary } />
        </Pressable>
    )
}
