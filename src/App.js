import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';


export default function App() {

  const [recivedNumber, setrecivedNumber] = useState(null);



  let content = !recivedNumber ? <StartGameScreen setrecivedNumber={setrecivedNumber} /> : <GameScreen />;

  return (
    <View style={styles.container}>
      <Header title={"Guess A Number"} />
      {content}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
