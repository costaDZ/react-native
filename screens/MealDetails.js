import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function MealDetails({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    container: {

    },
    text: {

    },
});