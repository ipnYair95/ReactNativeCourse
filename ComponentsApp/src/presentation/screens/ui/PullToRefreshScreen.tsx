import React, { useContext, useState } from 'react'
import { Title } from '../../components/ui/Title'
import { CustomView } from '../../components/ui/CustomView'
import { RefreshControl, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { globalStyles } from '../../../config/theme/theme'
import { ThemeContextProps, ThemeContext } from '../../context/ThemeContext'

export const PullToRefreshScreen = () => {

    const { colors } = useContext<ThemeContextProps>(ThemeContext);

    const [isRefreshing, setIsRefreshing] = useState(false);

    const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setIsRefreshing(true);

        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    progressViewOffset={top}
                    onRefresh={onRefresh}
                    colors={[colors.primary, 'red', 'orange', 'green']}
                    progressBackgroundColor={colors.cardBackground}
                    tintColor={colors.primary}
                />}
            style={[globalStyles.mainContainer, globalStyles.globalMargin]}
        >


            <Title text="Pull to refresh" safe />


        </ScrollView>
    )
}

