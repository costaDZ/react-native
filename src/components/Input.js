import React from 'react';

import { StyleSheet, TextInput } from 'react-native';


function Input(props) {
    return (
        <TextInput
            {...props}
            style={{ ...styles.input, ...props.style }}
        />
    )
}

export default Input;


const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        borderBottomWidth: 2,
    },
});