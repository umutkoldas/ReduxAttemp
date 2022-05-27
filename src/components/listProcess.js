import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addList} from '../redux/actions/listAction';

export default function ListProcess() {
  const dispatch = useDispatch();
  const myList = useSelector(state => state.myList);
  return (
    <View>
      <View>
        {myList.map((item, index) => {
          return (
            <Text style={styles.text} key={index}>
              {item}
            </Text>
          );
        })}
      </View>
      <Button title="ADD ITEM" onPress={() => dispatch(addList(4))} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontWeight: '500',
  },
});
