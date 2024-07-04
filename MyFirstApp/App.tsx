import { SafeAreaView } from "react-native"
import { PaperProvider } from "react-native-paper"
import { CounterM3Screen } from "./src/presentation/screens/CounterM3Screen"
import IonIcon from 'react-native-vector-icons/Ionicons';
import { BoxObjectModelScreen } from "./src/presentation/screens/BoxObjectModelScreen";
import { DimentionsScreen } from "./src/presentation/screens/DimentionsScreen";
import { PositionScreen } from "./src/presentation/screens/PositionScreen";
import { FlexScreen } from "./src/presentation/screens/FlexScreen";
import { FlexDirectionScreen } from "./src/presentation/screens/FlexDirectionScreen";
import { HomeworkScreen } from "./src/presentation/screens/HomeworkScreen";

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props: any) => <IonIcon {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorld  name="Yair Marin asdasd" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimentionsScreen  /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  )
}
