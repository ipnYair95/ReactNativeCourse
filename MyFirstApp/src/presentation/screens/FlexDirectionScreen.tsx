import { ScrollView, StyleSheet, View } from "react-native"

export const FlexDirectionScreen = () => {
    return (
        <View style={styles.container} >


            <View style={[styles.box, styles.box1]} />

            <View style={[styles.box, styles.box2]} />

            <View style={[styles.box, styles.box3]} />

            <View style={[styles.box, styles.box4]} />


            <View style={[styles.box, styles.box1]} />

            <View style={[styles.box, styles.box2]} />

            <View style={[styles.box, styles.box3]} />

            <View style={[styles.box, styles.box4]} />


            <View style={[styles.box, styles.box1]} />

            <View style={[styles.box, styles.box2]} />

            <View style={[styles.box, styles.box3]} />

            <View style={[styles.box, styles.box4]} />


            <View style={[styles.box, styles.box1]} />

            <View style={[styles.box, styles.box2]} />

            <View style={[styles.box, styles.box3]} />

            <View style={[styles.box, styles.box4]} />


            <View style={[styles.box, styles.box1]} />

            <View style={[styles.box, styles.box2]} />

            <View style={[styles.box, styles.box3]} />

            <View style={[styles.box, styles.box4]} />


            <View style={[styles.box, styles.box1]} />

            <View style={[styles.box, styles.box2]} />

            <View style={[styles.box, styles.box3]} />

            <View style={[styles.box, styles.box4]} />


            <View style={[styles.box, styles.box1]} />

            <View style={[styles.box, styles.box2]} />

            <View style={[styles.box, styles.box3]} />

            <View style={[styles.box, styles.box4]} />


            <View style={[styles.box, styles.box1]} />

            <View style={[styles.box, styles.box2]} />

            <View style={[styles.box, styles.box3]} />

            <View style={[styles.box, styles.box4]} />


            <View style={[styles.box, styles.box1]} />

            <View style={[styles.box, styles.box2]} />

            <View style={[styles.box, styles.box3]} />

            <View style={[styles.box, styles.box4]} />


            <View style={[styles.box, styles.box1]} />

            <View style={[styles.box, styles.box2]} />

            <View style={[styles.box, styles.box3]} />

            <View style={[styles.box, styles.box4]} />


            <View style={[styles.box, styles.box1]} />

            <View style={[styles.box, styles.box2]} />

            <View style={[styles.box, styles.box3]} />

            <View style={[styles.box, styles.box4]} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8cbcb',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexWrap: 'wrap',        
    },
    box: {
        // flex: 1,
        width: 100,
        height: 100
    },
    box1: {
        backgroundColor: '#5856d6'
    },
    box2: {
        backgroundColor: '#3035bb',
    },
    box3: {
        backgroundColor: '#0b09a0',

    },
    box4: {
        backgroundColor: '#050371',
    }
});
