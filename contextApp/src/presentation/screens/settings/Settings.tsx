import { Pressable, Text, View } from "react-native"
import { styles } from "../../../config/app-theme"
import { useCounterStore } from "../../store/counter-store"
import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"


export const Settings = () => {

  const navigation = useNavigation();

  const count = useCounterStore( (store) => store.count );

  const incrementBy = useCounterStore( (store) => store.incrementBy );

  useEffect(() => {
    
    navigation.setOptions({
      title: `Contador: ${count}`
    });

  }, [count])
  

  return (
    <View style={styles.container}>
      <Text style={styles.title} > Count: { count } </Text>

      <Pressable style={styles.primaryButton}  onPress={() => incrementBy(1)}  >
        <Text>  +1 </Text>
      </Pressable>

      <Pressable style={styles.primaryButton}  onPress={() => incrementBy(-1)} >
        <Text>  -1 </Text>
      </Pressable>

    </View>
  )
}
