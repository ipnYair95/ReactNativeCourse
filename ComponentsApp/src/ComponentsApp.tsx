import 'react-native-gesture-handler';
import { MainNavigator } from './presentation/navigator/MainNavigator';
import { ThemeProvider } from './presentation/context/ThemeContext';


export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  )
}
