import React from 'react';

import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


function Goals({ goals, removeGoal }) {
    return (
        <FlatList
            style={styles.liContainer}
            data={goals}
            renderItem={item =>
                <TouchableOpacity activeOpacity={.8} onPress={removeGoal.bind(this, item.item)}>
                    <Text style={styles.li}>{item.item}</Text>
                </TouchableOpacity>
            }
            keyExtractor={(item, i) => i.toString()}
        />
    )
}

export default Goals;

const styles = StyleSheet.create({
    li: {
        backgroundColor: "#7ff7ffd9",
        margin: 5,
        padding: 20,
        borderRadius: 10,
    },
});