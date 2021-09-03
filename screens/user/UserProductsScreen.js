import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderRightBtn';

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






export const CategoryMealsScreenOptions = (route, navigation) => {
    return {
        title: route.params.test,
        headerRight: (props) => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="favorite"
                    iconName='ios-star'
                    onPress={() => console.log(navigation)} />
            </HeaderButtons>
        ),
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
};