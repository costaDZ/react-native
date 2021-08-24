import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import ajax from './ajax';

import { Text, StyleSheet } from 'react-native';
import DealList from './components/DealList';

export default function App() {
  const [deals, setdeals] = useState([]);
  const [dealInfo, setdealInfo] = useState(null);


  console.log(dealInfo);

  useEffect(() => {
    (async function () {
      const deals = await ajax.getMoviesFromApi();
      setdeals(deals);
    })();
    //getdata();
  }, [])


  console.log(deals);

  return (
    deals.length ? <DealList deals={deals} setdealInfo={setdealInfo} dealInfo={dealInfo} /> : <Text>Loading</Text>
  );
}

