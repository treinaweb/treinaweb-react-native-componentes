import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView } from 'react-native';


export default class App extends Component {
  componentDidMount(){
    
  }

  render() {
    return (
      <SafeAreaView>
        <Text>TreinaWeb</Text>
      </SafeAreaView>
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
