import prompt from "react-native-prompt-android";

interface Options {
    title: string;
    subTitle?: string;
    buttons: PropmtButton[];
    promptType?: 'default' | 'secure-text' | 'plain-text' | 'login-password';
    placeholder?: string;
    defaultValue?: string;
}

interface PropmtButton {
    text: string;
    onPress: () => void;
    style?: "default" | "cancel" | "destructive";
}

export const showPrompt = ({ title, subTitle, buttons, promptType = 'plain-text', placeholder, defaultValue }: Options) => {


    prompt(
        title,
        subTitle,
        buttons,
        {
            type: promptType,
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeholder
        }
    );

}