import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

import colors from '../constant/colors';

function Header({ title }) {
    return (
        <View style={styles.Header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    Header: {
        paddingTop: 60,
        paddingBottom: 10,
        alignItems: "center",
        backgroundColor: colors.primary,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },


});