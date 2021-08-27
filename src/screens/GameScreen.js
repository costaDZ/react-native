import React, { useState } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import ChosedNumber from '../components/ChosedNumber';
import colors from '../constant/colors';

function generatRandomNum(min, max, exclude) {
    let random = Math.floor(Math.random() * (max - min)) + min;
    return (random === exclude)
        ?
        generatRandomNum(min, max, exclude)
        :
        random;
}


function GameScreen({ useChoise }) {

    const [currentGess, setcurrentGess] = useState(generatRandomNum(1, 99, useChoise))

    return (
        <View style={styles.container}>
            <Text>Oponent Gess</Text>
            <Card style={styles.card}>
                <ChosedNumber>
                    {currentGess}
                </ChosedNumber>
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button
                            color={colors.blue}
                            title="Lower"
                        //  onPress={ }
                        />
                    </View>

                    <View style={styles.btn}>
                        <Button
                            color={colors.blue}
                            title="greater"
                        //  onPress={ }
                        />
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default GameScreen;


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    card: {
        marginVertical: 20,
        fontSize: 40,
        padding: 20,
        textAlign: "center",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",

    },
    btnContainer: {
        width: "100%",
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    btn: {
        width: 80,
    },


})
