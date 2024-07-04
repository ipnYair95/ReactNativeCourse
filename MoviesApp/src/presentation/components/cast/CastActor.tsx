import { Image, StyleSheet, Text, View } from "react-native";
import { Cast } from "../../../core/entities/cast.entity";


interface Props {
    actor: Cast;
}

export const CastActor = ({ actor }: Props) => {
    return (
        <View style={styles.container}>

            <Image source={{ uri: actor.avatar }} style={{ width: 100, height: 150, borderRadius: 10 }} />

            <View style={styles.actorInfo}>

                <Text style={{ fontWeight: 'bold', fontSize: 15 }} > {actor.name} </Text>

                <Text style={{ opacity: 0.7, fontSize: 12 }} > {actor.name} </Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        width: 100
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    }
})


