import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function FilterScreen({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default FilterScreen;

const styles = StyleSheet.create({
    container: {

    },
    text: {

    },
});