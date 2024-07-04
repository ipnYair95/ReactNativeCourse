import { Pressable, Text, View } from "react-native"
import { styles } from "../../../config/app-theme"
import { useProfileStore } from "../../store/profile-store"


export const Profile = () => {

  const name = useProfileStore(state => state.name);

  const email = useProfileStore(state => state.email);

  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title} >  {name}  </Text>
      <Text style={styles.title} >  {email}  </Text>

      <Pressable style={styles.primaryButton} onPress={ () => useProfileStore.setState({ name: 'Yair Marin' }) } >
        <Text>  Cambiar nombre </Text>
      </Pressable>

      <Pressable style={styles.primaryButton} onPress={ () => useProfileStore.setState({ email: 'yair@mail.com' }) } >
        <Text>  Cambiar email </Text>
      </Pressable>

      <Pressable style={styles.primaryButton} onPress={ () => changeProfile('John Doe', 'john@me.com') } >
        <Text>  Regresasr a John </Text>
      </Pressable>


    </View>
  )
}
