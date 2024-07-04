import { StyleSheet, View } from "react-native"

export const HomeworkScreen = () => {
    return (
        <View style={styles10.container}>

            <View style={[styles10.box, styles10.purpleBox]} />

            <View style={[styles10.box, styles10.orangeBox]} />

            <View style={[styles10.box, styles10.blueBox]} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b'
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {        
        backgroundColor: '#5856d6'
    },
    orangeBox: {
        flex: 1,
        backgroundColor: '#f0a23b'
    },
    blueBox: {        
        backgroundColor: '#28c4d9'
    }
});

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        justifyContent: 'center'
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856d6'
    },
    orangeBox: {
        backgroundColor: '#f0a23b'
    },
    blueBox: {
        width: '100%',
        backgroundColor: '#28c4d9'        
    }
});


const styles3 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        justifyContent: 'center'
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        alignSelf: 'flex-end'
    },
    orangeBox: {
        backgroundColor: '#f0a23b'
    },
    blueBox: {
        backgroundColor: '#28c4d9',
        alignSelf: 'center'
    }
});

const styles4 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856d6',
    },
    orangeBox: {
        backgroundColor: '#f0a23b',
        alignSelf: 'center'
    },
    blueBox: {
        backgroundColor: '#28c4d9',
        alignSelf: 'flex-end'
    }
});

const styles5 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        height: '100%',
        backgroundColor: '#5856d6',
    },
    orangeBox: {
        height: '100%',
        backgroundColor: '#f0a23b',
    },
    blueBox: {
        height: '100%',
        backgroundColor: '#28c4d9',
    }
});

const styles6 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        flex: 1,
        width: '100%',
        backgroundColor: '#5856d6',
    },
    orangeBox: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f0a23b',
    },
    blueBox: {
        flex: 2,
        width: '100%',
        backgroundColor: '#28c4d9',
    }
});


const styles7 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856d6',
    },
    orangeBox: {
        backgroundColor: '#f0a23b',
    },
    blueBox: {
        backgroundColor: '#28c4d9',
    }
});

const styles8 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',        
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856d6',
    },
    orangeBox: {
        backgroundColor: '#f0a23b',        
        right: -100
    },
    blueBox: {
        backgroundColor: '#28c4d9',
    }
});

const styles9 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'        
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        top: 100
    },
    orangeBox: {
        backgroundColor: '#f0a23b',
        right: -100
        
    },
    blueBox: {
        backgroundColor: '#28c4d9',
    }
});

const styles10 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'        
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856d6',
    },
    orangeBox: {
        backgroundColor: '#f0a23b',     
        top: 50   
    },
    blueBox: {
        backgroundColor: '#28c4d9',
    }
});



