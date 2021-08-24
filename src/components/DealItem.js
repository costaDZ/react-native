import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function DealItem({ item, setdealInfo }) {


    function setDeal() {
        setdealInfo(item);
    }


    return (
        <TouchableOpacity
            onPress={() => setDeal()}
            style={styles.container}
        >
            <Image
                style={styles.image}
                source={{ uri: item.media[0] }}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.subInfo}>
                    <Text style={styles.price}>{item.price / 100} $</Text>
                    <Text style={styles.name}>{item.cause.name}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default DealItem



const styles = StyleSheet.create({
    container: {
        // justifyContent: "center",
        width: "80%",
        margin: "auto",
        // alignItems: "center",
        //paddingVertical: 5,
        marginVertical: 5,

        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#b3b3b3",
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 10,
    },
    info: {
        padding: 5,

    },
    subInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        paddingVertical: 5,
        fontWeight: "bold",

    },
    price: {
        paddingVertical: 5,

    },
    name: {
        paddingVertical: 5,

    },
});