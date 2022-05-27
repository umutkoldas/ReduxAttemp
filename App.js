import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import ListProcess from './src/components/listProcess';
import NumberProcess from './src/components/numberProcess';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.main}>
        <NumberProcess />
        <ListProcess />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'beige',
  },
});
export default App;
