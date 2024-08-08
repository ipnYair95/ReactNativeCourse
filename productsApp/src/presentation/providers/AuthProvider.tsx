import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParams } from "../navigation/StackNavigator"
import { PropsWithChildren, useEffect } from "react"
import { useAuthStore } from "../store/auth/useAuthStore"


export const AuthProvider = ({ children }: PropsWithChildren) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

    const { checkStatus, status } = useAuthStore();

    useEffect(() => {

        checkStatus();

    }, [])


    useEffect(() => {

       validateStatus();
      
    }, [status])

    const validateStatus = () => {

        if( status === 'checking' ){
            return;
        }

        if( status === 'authenticated' ){
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeScreen' }]
            });
            return;
        }

        navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }]
        });

    }
    

    return (
        <>
            {children}
        </>
    )
}
