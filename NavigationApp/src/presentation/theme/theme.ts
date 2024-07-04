import { StyleSheet } from "react-native";

export const globalColors = {
    primary: '#7037eb',
    secondary: '#f72585',
    tertiary: '#3a0ca3',
    success: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',
    backgroundColor: '#fff'
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.backgroundColor        
    },

    primaryButton: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,         
        marginVertical: 16,  
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: globalColors.backgroundColor,
        fontSize: 18
    }

});