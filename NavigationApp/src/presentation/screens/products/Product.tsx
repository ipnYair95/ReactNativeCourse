import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"
import { RootStackParams } from "../../routes/StackNavigator";
import { globalStyles } from "../../theme/theme";
import { useEffect } from "react";


export const Product = () => {

  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

  const nagivation = useNavigation();

  useEffect(() => {

    nagivation.setOptions({
      title: params.name
    });  

  }, [])

  return (
    <View style={globalStyles.container} >

      <Text> Product </Text>

      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
      }} >
        {params.id} - {params.name}
      </Text>


    </View>
  )
}
