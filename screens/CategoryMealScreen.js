import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


function CategoryMealScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>CategoryMealScreen</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default CategoryMealScreen;

const styles = StyleSheet.create({
    container: {

    },
    text: {

    },
});