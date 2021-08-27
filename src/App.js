import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { Text, StyleSheet, View, TextInput, Button, FlatList } from 'react-native';

import InputList from './components/InputList';
import Goals from './components/Goals';

export default function App() {

  const [goals, setgoals] = useState([]);
  const [modal, setmodal] = useState(false);


  const addToGoals = (input) => {
    setgoals(prev => [...goals, input]);
    setmodal(false);
  }

  const removeGoal = item => {
    setgoals(prev => {
      return prev.filter(goal => goal !== item);
    })
  }

  console.log(modal);
  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setmodal(!modal)} />
      <InputList addToGoals={addToGoals} modal={modal} setmodal={setmodal} />
      <Goals goals={goals} removeGoal={removeGoal} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 60,
    borderWidth: 1,
    flex: 1,
  },

  btn: {
    flex: 1,
  },

});
