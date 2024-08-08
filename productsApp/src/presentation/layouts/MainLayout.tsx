import { useNavigation } from "@react-navigation/native";
import { Divider, Layout, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MyIcon } from "../components/ui/MyIcon";

interface Props {
    title: string;
    subTitle?: string;
    rightAction?: () => void;
    rightActionIcon?: string;

    children: React.ReactNode
}

export const MainLayout = ({ title, subTitle, rightAction, rightActionIcon, children }: Props) => {

    const { top } = useSafeAreaInsets();

    const { canGoBack, goBack } = useNavigation();

    const renderBackIcon = () => (
        <TopNavigationAction onPress={goBack} icon={<MyIcon name="arrow-back-outline" />} />
    );

    const RenderRightAction = () => {

        if (!rightAction || !rightActionIcon) return null;

        return (
            <TopNavigationAction onPress={rightAction} icon={<MyIcon name={rightActionIcon} />} />
        );
    }


    return (
        <Layout style={{ flex: 1, paddingTop: top }}>

            <TopNavigation
                title={title}
                subtitle={subTitle}
                alignment="center"
                accessoryLeft={canGoBack() ? renderBackIcon : undefined}
                accessoryRight={() => <RenderRightAction />}
            />

            <Divider />

            <Layout style={{ flex: 1 }}>
                {children}
            </Layout>


        </Layout>
    );
}
