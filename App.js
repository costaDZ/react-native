import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from './screens/CategoryScreen';
import CategoryMealScreen from './screens/CategoryMealScreen';
import MealDetails from './screens/MealDetails';



import { useFonts } from 'expo-font';



export default function App() {
  const [loaded] = useFonts({
    sans_normal: require('./assets/fonts/OpenSans-Regular.ttf'),
    sans_bold: require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategoryScreen">

        <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={
            {
              title: 'CategoryScreen',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }
          } />

        <Stack.Screen
          name="CategoryMealScreen"
          component={CategoryMealScreen}
          options={{ title: 'CategoryMealScreen' }} />

        <Stack.Screen
          name="MealDetails"
          component={MealDetails}
          options={{ title: 'MealDetails' }} />

      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>231</Text>
    // </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: "sans_normal",
  }
});
