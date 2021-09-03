import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


// screens
import CategoryScreen from '../screens/CategoryScreen';
import CategoryMealsScreen, { CategoryMealsScreenOptions } from '../screens/CategoryMealScreen';
import MealDetails from '../screens/MealDetails';
import FavoriteMeals from '../screens/FavoriteMeals';
import FilterScreen from '../screens/FilterScreen';


import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const ScreensStackNavigator = createNativeStackNavigator();

const ScreensNavigator = ({ navigation }) => {
    return (
        <ScreensStackNavigator.Navigator
            initialRouteName="CategoryScreen"
            screenOptions={
                SharedHeaderOptions,
                {
                    headerLeft: (props) => (
                        <View style={{ flexDirection: "row" }}>
                            <Entypo
                                name="menu"
                                size={24}
                                color="black"
                                onPress={() => navigation.toggleDrawer()}
                            />
                        </View>
                    ),
                }

            }
        >
            <ScreensStackNavigator.Screen
                name="CategoryScreen"
                component={CategoryScreen}
            />

            <ScreensStackNavigator.Screen
                name="CategoryMealScreen"
                component={CategoryMealsScreen}
                options={(params, navigation) => CategoryMealsScreenOptions(params.route, navigation)}
            />

            <ScreensStackNavigator.Screen
                name="MealDetails"
                component={MealDetails}
                options={{ title: 'MealDetails' }}
            />

            <ScreensStackNavigator.Screen
                name="FavoriteMeals"
                component={FavoriteMeals}
                options={{ title: 'FavoriteMeals' }}
            />
        </ScreensStackNavigator.Navigator>
    )
};





const ScreensTabNavigator = createBottomTabNavigator();

export const TapNavigation = () => {
    return (
        <ScreensTabNavigator.Navigator
            screenOptions={SharedHeaderOptions}
        >
            <ScreensTabNavigator.Screen
                name="Main"
                component={ScreensNavigator}
                options={{
                    tabBarIcon: () => <Ionicons
                        name={'ios-information-circle'}
                        size={25}
                        color={"red"}
                    />,
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,

                }}

            />

            <ScreensTabNavigator.Screen
                name="Favorites"
                component={FavoriteMeals}
                options={{
                    tabBarIcon: () => <Ionicons
                        name={'ios-information-circle-outline'}
                        size={25}
                        color={"red"}
                    />,
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                    tabBarBadge: 6,
                }}
            />
        </ScreensTabNavigator.Navigator>
    );
}



const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={
                {
                    headerShown: false,
                    drawerType: "front",
                }
            }
        >
            <Drawer.Screen
                name="Main"
                component={TapNavigation}
            />
            <Drawer.Screen
                name="Filter Food"
                component={FilterStackNavigator}
            />
        </Drawer.Navigator>
    );
}


const FilterStackNavigator = ({ navigation }) => {
    return (
        <ScreensStackNavigator.Navigator
            screenOptions={
                SharedHeaderOptions,
                {
                    headerLeft: (props) => (
                        <View style={{ flexDirection: "row" }}>

                            <AntDesign
                                name="back"
                                size={26}
                                color="black"
                                onPress={() => navigation.goBack()}
                            />
                        </View>
                    ),
                }
            }
        >

            <ScreensStackNavigator.Screen
                name="Filter"
                component={FilterScreen}
                options={{ title: 'FilterScreen' }}
            />

        </ScreensStackNavigator.Navigator>
    )
}



const SharedHeaderOptions = () => {
    return {
        headerStyle: {
            backgroundColor: 'cyan',

        },
        headerTintColor: 'black',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
};





