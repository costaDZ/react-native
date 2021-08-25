import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import DealItem from './DealItem';
import DealIDetail from './DealIDetail';
import SearchBar from './SearchBar';



function DealList({ deals, setdealInfo, dealInfo, setsearchDeals }) {


    if (dealInfo) {
        return (
            <DealIDetail item={dealInfo} setdealInfo={setdealInfo} />
        )
    }

    return (
        <>
            <SearchBar setsearchDeals={setsearchDeals} />
            <View style={styles.list}>
                <FlatList
                    data={deals}
                    renderItem={({ item }) => <DealItem setdealInfo={setdealInfo} item={item} />}
                    keyExtractor={item => item.key}
                />
            </View>
        </>
    )
}

export default DealList;

DealList.propTypes = {
    deals: PropTypes.array.isRequired,
}




const styles = StyleSheet.create({
    list: {
        paddingTop: 30,
        marginVertical: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

});