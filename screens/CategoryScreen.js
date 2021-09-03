import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/data.js';





function CategoryScreen({ navigation }) {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => navigation.navigate("CategoryMealScreen", {
                    test: itemData.item.title,
                    navigation,
                })}
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




export const ScreenOptions = (route, navigation) => {
    return {
        headerRight: (props) => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="favorite"
                    iconName='ios-star'
                    onPress={() => console.log(navigation)} />
            </HeaderButtons>
        ),
    }
};
















const styles = StyleSheet.create({
    gridContainer: {

    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
});