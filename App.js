import React, {Component} from 'react';
import {StyleSheet, View, Text } from 'react-native';

import MeuComponenteView from './native-components/MeuComponenteNativeView';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container} >
        <MeuComponenteView style={{width: 100, height: 100}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
