/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';

import AppCounter from './src/AppCounter';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <AppCounter />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
