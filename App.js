import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import * as Font from 'expo-font';


import CategoryScreen from './screens/CategoryScreen';
import CategoryMealScreen from './screens/CategoryMealScreen';
import MealDetails from './screens/MealDetails';



import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from './Navigation/MealsNavigation';


export default function App() {

  const [loaded] = useFonts({
    sans_normal: require('./assets/fonts/OpenSans-Regular.ttf'),
    sans_bold: require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
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
