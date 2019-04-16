import React, {Component} from 'react';
import {StyleSheet, View } from 'react-native';

import { WebView } from 'react-native-webview'; 

export default class App extends Component {

  componentDidMount(){
    
  }

  render() {
    return (
      <WebView source={{uri: 'https://treinaweb.com.br'}} />
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
