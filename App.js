import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Provider } from 'react-redux';
import { configureStore, rou } from './Redux/store';

import { ScreensNavigator } from './Navigation/MealsNavigation';
import { NavigationContainer } from '@react-navigation/native';
//import ProductsOverviewScreen from './screens/shop/ProductsOverviewScreen.js'

export default function App() {


  const store = configureStore();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreensNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
