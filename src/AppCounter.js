/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, StatusBar, View, Button, Text} from 'react-native';
import {connect} from 'react-redux';

import {INCREMENT, DECREMENT} from './redux/actionTypes';

const AppCounter = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.containter}>
        <Button title="Increment" onPress={props.increaseCount} />
        <Text style={{marginHorizontal: 15}}>{props.count}</Text>
        <Button title="Decrement" onPress={props.decreaseCount} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containter: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: () => dispatch({type: INCREMENT}),
    decreaseCount: () => dispatch({type: DECREMENT}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppCounter);
