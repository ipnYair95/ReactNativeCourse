import { Button, Input, Layout, Text } from "@ui-kitten/components"
import { Alert, useWindowDimensions } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { MyIcon } from "../../components/ui/MyIcon";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigator";
import { useState } from "react";
import { useAuthStore } from "../../store/auth/useAuthStore";

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {

}

export const Login = ({ navigation }: Props) => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isPosting, setIsPosting] = useState(false);

  const { height } = useWindowDimensions();

  const { login } = useAuthStore();

  const onLogin = async () => {

    if (form.email.trim().length === 0 || form.password.trim().length === 0) {
      return;
    }

    setIsPosting(true);

    const wasSuccess = await login(form.email, form.password);

    setIsPosting(false);

    if (wasSuccess) {
      return;
    }

    Alert.alert('Error', 'Credenciales incorrectas');

  }

  return (
    <Layout style={{ flex: 1 }} >

      <ScrollView style={{ marginHorizontal: 40 }} >

        <Layout style={{ paddingTop: height * 0.35 }} >
          <Text category="h1" > Ingresar </Text>
          <Text category="p2"> Por favor, ingrese para continuar </Text>
        </Layout>

        <Layout style={{ marginTop: 20 }} >

          <Input
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ marginBottom: 10 }}
            accessoryLeft={<MyIcon name="email-outline" />}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry style={{ marginBottom: 10 }}
            accessoryLeft={<MyIcon name="lock-outline" />}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

        </Layout>

        <Layout style={{ height: 20 }} />

        <Layout>
          <Button
            disabled={isPosting}
            onPress={onLogin}
            accessoryRight={<MyIcon name="arrow-forward-outline" white />}
          >
            Ingresar
          </Button>
        </Layout>

        {/*  */}

        <Layout style={{ height: 50 }} />

        <Layout style={{
          alignItems: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'center'
        }} >
          <Text> ¿No tienes una cuenta? </Text>
          <Text status="primary" category="s1" onPress={() => navigation.navigate('RegisterScreen')} > crea una </Text>
        </Layout>

      </ScrollView>

    </Layout>
  )
}
