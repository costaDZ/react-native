import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Provider } from 'react-redux';
import { configureStore, rou } from './Redux/store';

import ProductDetailsScreen from './screens/shop/ProductDetailsScreen'


export default function App() {



<<<<<<< HEAD
=======

  const store = configureStore();
>>>>>>> react-native-template
  return (
    <Provider store={store}>
      <ProductDetailsScreen />
      <View>
        <Text>Hello</Text>
      </View>
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
