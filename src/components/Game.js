import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import RandomNumber from './RandomNumber';


function Game({ itemsNumber, timeLevel, setgameId }) {

    const [state, setstate] = useState([]);
    const [randomNum, setrandomNum] = useState(() => {
        let arr = Array.from({ length: itemsNumber })
        arr.map((item, i) => arr[i] = Math.floor(Math.random() * 20))
        return arr;
    });
    const [target, settarget] = useState(1);
    const [remainingTime, setremainingTime] = useState(timeLevel);


    useEffect(() => {
        let num = 0;
        let counted = [];
        let i = 0;
        while (i <= itemsNumber - 4) {
            let randomIndex = Math.floor(Math.random() * (randomNum.length - 1));
            if (counted.indexOf(randomIndex) === -1) {
                num += randomNum[randomIndex];
                counted.push(randomIndex);
                i++;
            }
        }
        settarget(num);
    }, []);

    useEffect(() => {
        let interval = setInterval(startCounter, 1000);
        function startCounter() {
            setremainingTime(prev => prev -= 1);
        }
        if (remainingTime <= 0) clearInterval(interval);
        if (sumSelected() !== "playing") clearInterval(interval);
        return () => clearInterval(interval);
    }, [remainingTime]);


    function checkSelected(index) {
        if (state.indexOf(index) >= 0) return true;
    }
    function addToSelected(index) {
        setstate([...state, index]);
    }
    function sumSelected() {
        let sum = state.reduce((acc, val) => acc += randomNum[val], 0);
        if (sum === target) {
            console.log(sum, target);
            return "win"
        } else if (sum > target || !remainingTime) {
            return "lost";
        } else {
            return "playing";
        }
    }

    function reset() {
        // setstate([]);
        // setremainingTime(10);

        window.Refrech();
    }


    return (
        <View style={styles.container}>
            <View style={[styles.statusBar, styles[sumSelected()]]}>
                <Text>
                    {sumSelected()}
                </Text>
                <Text>
                    Remaining Time : {remainingTime}
                </Text>
            </View>

            <View
                style={styles.numbersContainer}
            >
                {randomNum.map((item, i) =>
                    <RandomNumber
                        key={i}
                        id={i}
                        num={item}
                        isSlected={checkSelected(i) || sumSelected() !== "playing"}
                        addToSelected={addToSelected}
                        sumSelected={sumSelected}
                    />
                )}

            </View>

            <View
                style={styles.target}
            >
                {
                    sumSelected() !== "playing"
                    &&
                    <Button
                        title="play again"
                        onPress={() => setgameId(prev => prev += 1)}
                    />
                }
                <Text style={styles.amount}>
                    {target}
                </Text>


            </View>

        </View>
    );
}

export default Game;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
    },

    numbersContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
    },
    target: {
        textAlign: 'center',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginHorizontal: 20,
    },
    amount: {
        fontSize: 40,
        backgroundColor: "cyan",
        color: "red",
        borderRadius: 20,
        padding: 10,
        alignSelf: "left",

    },
    statusBar: {
        fontSize: 25,
        textAlign: "center",
        backgroundColor: "#72ffff82",
        padding: 4,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    win: {
        backgroundColor: "#7dff80",
    },
    lost: {
        backgroundColor: "#ff7839"
    },

});