import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/data.js';





function CategoryScreen({ navigation }) {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => navigation.navigate("CategoryMealScreen")}
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
            keyExtractor={item => item.id}
        />
    )
}



export default CategoryScreen;

const styles = StyleSheet.create({
    gridContainer: {

    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
});