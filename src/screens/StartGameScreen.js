import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';

import colors from '../constant/colors';
import Input from '../components/Input';
import ChosedNumber from '../components/ChosedNumber';


function StartGameScreen({ setrecivedNumber }) {

    const [input, setinput] = useState("");
    const [confirm, setconfirm] = useState(false);
    const [selectedNumber, setselectedNumber] = useState();



    function validateInput(val) {
        setinput(val.replace(/[^0-9]/g, ""));
    }

    function resetInputHandler() {
        Keyboard.dismiss();
        setinput("");
        setconfirm(false);
    }

    function confirmInputHandler() {
        let chosenNumber = parseInt(input);
        if (
            isNaN(chosenNumber)
            || chosenNumber <= 0
            || chosenNumber > 99
            // || !chosenNumber
        ) {
            Alert.alert("invalid !!!",
                "Number Between (1 - 99)",
                [{ text: 'okay', style: 'destructive', onPress: resetInputHandler }]
            );
            resetInputHandler();
            return;
        }
        resetInputHandler();
        setselectedNumber(chosenNumber);
        setrecivedNumber(chosenNumber);
        setconfirm(true);
    }

    console.log(selectedNumber);


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.title}>StartGameScreen</Text>

                <Card style={styles.inputContainer}>
                    <Text>Select A number</Text>

                    <Input
                        style={styles.input}
                        blurOnSubmit
                        keyboardType="number-pad"
                        maxLength={2}
                        value={input}
                        onChangeText={validateInput}
                    ></Input>

                    <View style={styles.btnContainer}>
                        <View style={styles.btn}>
                            <Button
                                title="Reset"
                                color={colors.secondary}
                                onPress={() => console.log("reset")}
                            />
                        </View>
                        <View style={styles.btn}>
                            <Button
                                title="Confirm"
                                onPress={confirmInputHandler}
                            />
                        </View>
                    </View>
                </Card>
                {confirm &&
                    <Card style={styles.chosenNum}>
                        <Text style={styles.chosenNumTit}>Chosen Number </Text>
                        <ChosedNumber>{selectedNumber}</ChosedNumber>

                        <View style={styles.startBtn}>
                            <Button
                                color={colors.blue}
                                title="Start Game"
                            />
                        </View>

                    </Card>
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    title: {
        fontSize: 20,
        marginVertical: 30,
    },
    inputContainer: {
        width: "90%",
        padding: 20,
        alignItems: "center",
    },
    input: {
        paddingVertical: 5,
        textAlign: "center",
        width: "30%",
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
    chosenNum: {
        marginVertical: 20,
        fontSize: 40,
        padding: 20,
        textAlign: "center",
        justifyContent: "space-between",
        alignItems: "center",
    },
    chosenNumTit: {
        fontWeight: "700",
        fontSize: 30,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    startBtn: {
        marginTop: 30,
    }
});