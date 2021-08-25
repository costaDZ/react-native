import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, PanResponder, Animated, Button } from 'react-native';

import ajax from '../ajax';
import PropTypes from 'prop-types';


function DealIDetail({ item, setdealInfo }) {

    const [detail, setdetail] = useState({});
    const [imageIndex, setimageIndex] = useState(0);

    const imageXpos = useRef(new Animated.Value(0)).current;
    let width = Dimensions.get("window").width;

    const panResponder = React.useRef(
        PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gs) => true,
            onPanResponderMove: (evt, gs) => {
                imageXpos.setValue(gs.dx);
            },
            onPanResponderRelease: (evt, gs, imageIndex) => {
                if (Math.abs(gs.dx) > width * 0.4) {
                    let dir = Math.sign(gs.dx);
                    Animated.timing(imageXpos, {
                        toValue: dir * width,
                        duration: 250,
                    }).start(() => handelSwip(dir * -1));
                } else {
                    Animated.spring(imageXpos, {
                        toValue: 0,
                    }).start();
                }
            },
        })
    ).current;
    let counter = 0;


    function handelSwip(idxDir) {
        if (((idxDir > 0) && counter + 1 === 3) || ((idxDir < 0) && counter - 1 < 0)) {
            Animated.spring(imageXpos, {
                toValue: 0,
            }).start();
            return;
        }
        setimageIndex(prev => prev + idxDir);
        imageXpos.setValue(width * idxDir);
        Animated.spring(imageXpos, {
            toValue: 0,
        }).start();
        if (idxDir < 0) counter--;
        if (idxDir > 0) counter++;
    }

    useEffect(() => {
        (async function () {
            const deals = await ajax.fetchDealDetail(item.key);
            console.log(deals);
            setdetail(deals);
        })();
    }, []);

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity >
                    <Button
                        onPress={() => setdealInfo(null)}
                        title="Back"
                    />
                </TouchableOpacity>
                <Animated.Image
                    style={[styles.image,
                    {
                        left: imageXpos
                    }
                    ]}
                    source={{ uri: item.media[imageIndex] }}
                    {...panResponder.panHandlers}
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
                <View style={styles.useInfo}>
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

DealIDetail.propTypes = {
    item: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        margin: "auto",
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
    useInfo: {
        marginVertical: 40,
        marginHorizontal: 40,
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