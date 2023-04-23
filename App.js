import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { Provider, useSelector, useDispatch } from 'react-redux';

import store from './redux/store';

import { increment, decrement, multiple10, divide10, reset } from './redux/reducer';


const AppScreen = () => {
  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <View style={{ flexDirection: "row" }}>
      <TouchableHighlight style={{ ...styles.button, backgroundColor: "#E4A0F7" }} onPress={() => dispatch(divide10())}>
          <Text>÷10</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ ...styles.button, backgroundColor: "red" }} onPress={() => dispatch(decrement())}>
          <Text>-</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ ...styles.button, backgroundColor: "grey" }} onPress={() => dispatch(reset())}>
          <Text>Reset</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ ...styles.button, backgroundColor: "limegreen" }} onPress={() => dispatch(increment())}>
          <Text>+</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ ...styles.button, backgroundColor: "#59788A" }} onPress={() => dispatch(multiple10())}>
          <Text>x10</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default function App() {
  return (
    <Provider store={store}>
        <AppScreen />
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
  text: {
    fontSize: 100,
    fontWeight: "bold"
  },
  button: {
    width: 70,
    height: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2
  }
});