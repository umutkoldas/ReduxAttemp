import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, StyleSheet, Text, View} from 'react-native';
import {increaseNumber, decreaseNumber} from '../redux/actions/numberActions';

export default function NumberProcess() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  console.log(counter);
  return (
    <View style={styles.main}>
      <Button title="+" onPress={() => dispatch(increaseNumber(3))} />
      <Text>{counter}</Text>
      <Button title="-" onPress={() => dispatch(decreaseNumber(2))} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
