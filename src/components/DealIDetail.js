import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

import ajax from '../ajax';


function DealIDetail({ item }) {

    const [detail, setdetail] = useState({});

    useEffect(() => {
        (async function () {
            const deals = await ajax.fetchDealDetail(item.key);
            console.log(deals);
            setdetail(deals);
        })();
    }, []);



    console.log(detail);







    return (
        <>
            <View style={styles.container}>
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
            </View>
            {
                detail.user
                &&
                <View>
                    <Image source={{ uri: detail.user.avatar }} style={styles.avatar} />
                    <Text style={styles.name}>{detail.user.name}</Text>
                    <Text style={styles.description}>{detail.description}</Text>
                    <Text style={styles.dealType}>{detail.dealType}</Text>

                </View>
            }

        </>
    )
}
export default DealIDetail;



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
    avatar: {
        height: 60,
        width: 60,
    }
});