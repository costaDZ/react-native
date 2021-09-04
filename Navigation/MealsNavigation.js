

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// components
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen.js';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen.js';




const Stack = createNativeStackNavigator();



export const ScreensNavigator = () => {
    return (
        <Stack.Navigator
            //  initialRouteName="CategoryScreen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "tomato",
                    color: "white",
                },
                headerTintColor: '#fff',
            }}
        >

            <Stack.Screen
                name="main"
                component={ProductsOverviewScreen}
                options={{
                    title: "Shop"
                }}
            />
            <Stack.Screen
                name="Details"
                component={ProductDetailsScreen}
            />
            {/* <Stack.Screen
                name="CategoryMealScreen"
                component={CategoryMealsScreen}
                options={(params) => CategoryMealsScreenOptions(params.route)}
            />

            <Stack.Screen
                name="MealDetails"
                component={MealDetails}
                options={{ title: 'MealDetails' }}
            />

            <Stack.Screen
                name="FavoriteMeals"
                component={FavoriteMeals}
                options={{ title: 'FavoriteMeals' }}
            /> */}
        </Stack.Navigator>
    )
};