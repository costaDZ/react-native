import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput
} from 'react-native';
import ajax from '../ajax';

function SearchBar({ setsearchDeals }) {

    //fetchDealSearchResults

    const [number, onChangeNumber] = useState("");


    useEffect(() => {
        async function search() {
            const result = await ajax.fetchDealSearchResults(number);
            setsearchDeals(result);
        }
        search();
    }, [number]);


    console.log(number);
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
            />
        </View>
    )
}

export default SearchBar


const styles = StyleSheet.create({
    formContainer: {
        marginTop: 40,
        alignItems: ' center',
        justifyContent: "center",
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: "80%",
        borderRadius: 10,
        padding: 10,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",

    }

});
