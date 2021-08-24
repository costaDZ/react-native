import React, { useState } from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';

function RandomNumber({ num, isSlected, addToSelected, id, sumSelected }) {

    function getValue() {
        addToSelected(id);
        sumSelected();
    }

    return (
        <TouchableOpacity onPress={() => !isSlected && getValue()}>
            <Text style={[styles.number, isSlected && styles.slected]}>
                {num}
            </Text>
        </TouchableOpacity>
    )
}
export default RandomNumber;

const styles = StyleSheet.create({
    number: {
        fontSize: 30,
        margin: 30,
        width: 80,
        textAlign: "center",
        borderRadius: 50,
        padding: 10,
        borderColor: "black",
        borderWidth: 3,
        borderColor: "cyan",
    },

    slected: {
        backgroundColor: "cyan",
    }
});