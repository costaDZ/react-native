import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import ajax from './ajax';

import { Text, StyleSheet, View, Animated } from 'react-native';
import DealList from './components/DealList';

export default function App() {
  const [deals, setdeals] = useState([]);
  const [searchDeals, setsearchDeals] = useState([]);

  const [dealInfo, setdealInfo] = useState(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;


  // function animateTitle() {
  //     Animated.spring(fadeAnim, {
  //       toValue: 50,
  //       duration: 1000
  //     }).start(() => {
  //       fadeAnim, {
  //         toValue: -50,
  //         duration: 1000
  //       }
  //     });
  // }

  useEffect(() => {
    //animateTitle();

    (async function () {
      const deals = await ajax.getMoviesFromApi();
      setdeals(deals);
    })();

  }, [])


  return (
    deals.length ?
      <DealList
        deals={searchDeals || deals}
        setdealInfo={setdealInfo}
        dealInfo={dealInfo}
        setsearchDeals={setsearchDeals}
        searchDeals={searchDeals}
      /> :
      <Animated.View style={
        [
          styles.loader,
          {
            left: fadeAnim
          }
        ]
      }>
        <Text style={styles.loaderText}>
          Loading
        </Text>
      </Animated.View>
  );
}


const styles = StyleSheet.create({
  loader: {
    //  backgroundColor: "grey",
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  loaderText: {
    fontSize: 30,
  }
});
