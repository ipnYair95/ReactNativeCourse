import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { DrawerActions, NavigationProp, useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { RootStackParams } from "../../routes/StackNavigator";
import { useEffect } from "react";
import { HamburguerMenu } from "../../components/shared/HamburguerMenu";

export const Home = () => {

  // const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {

   /*  navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) } >
          <Text> Menu </Text>
        </Pressable>
      )
    }); */

  }, [])

  return (
    <View style={globalStyles.container} >

      <HamburguerMenu />

      <PrimaryButton onPress={() => navigation.navigate('Products')} label="Productos" />

      <PrimaryButton onPress={() => navigation.navigate('Settings')} label="Settings" />

    </View>
  )
}
