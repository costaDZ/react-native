import React from 'react';

import { View, StyleSheet } from 'react-native';


function Card({ style, children }) {
    return (
        <View style={{ ...styles.container, ...style }}>
            {children}
        </View>
    )
}

export default Card;


const styles = StyleSheet.create({
    container: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.6,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
    },
});