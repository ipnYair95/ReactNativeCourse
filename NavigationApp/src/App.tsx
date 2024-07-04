import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { ButtonTabs } from './presentation/routes/ButtonTabs';

const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
      {/* <ButtonTabs /> */}
    </NavigationContainer>
  )
}

export default App