import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import colors from '../constant/colors';

function ChosedNumber({ children }) {
    return (
        <View >
            <Text style={styles.number}>{children}</Text>
        </View>


    )
}

export default ChosedNumber;


const styles = StyleSheet.create({
    number: {
        fontWeight: "700",
        fontSize: 80,
        color: colors.blue,
        paddingHorizontal: 15,
    },

})