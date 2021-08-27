import React, { useState } from 'react';

import { Text, StyleSheet, View, TextInput, Button, Modal } from 'react-native';


function InputList({ addToGoals, modal, setmodal }) {

    const [input, setinput] = useState("");

    return (
        <Modal
            animationType="slide"
            visible={modal}
            style={styles.modal}
        >
            <View style={styles.formContainer}>
                <TextInput
                    placeholder="course goal"
                    onChangeText={setinput}
                    value={input}
                    style={styles.input} />
                <Button
                    style={styles.btn}
                    onPress={() => {
                        addToGoals(input);
                        setinput("");
                    }}
                    title="ADD"
                />
                <View
                    style={styles.returnbtn}
                >
                    <Button
                        color="orange"
                        onPress={() => {
                            setmodal(false);
                            setinput("");
                        }}
                        title="Return"
                    />
                </View>
            </View>
        </Modal>
    )
}

export default InputList;


const styles = StyleSheet.create({
    formContainer: {
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "80%",
    },
    input: {
        width: "80%",
        height: 35,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
    },
    modal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    returnbtn: {
        borderWidth: 1,
        marginTop: 15,
    }
});