import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';


export default class App extends Component {
  componentDidMount(){
    
  }

  render() {
    return (
      <View >
        <TouchableHighlight onPress={() => {}} underlayColor="green">
          <Text style={styles.button}>TouchableHighlight</Text>
        </TouchableHighlight>

        <TouchableOpacity  onPress={() => {}} >
          <Text style={styles.button}>TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableNativeFeedback  onPress={() => {}} >
          <View>
            <Text>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback  onPress={() => {}}  >
          <Text style={styles.button}>TouchableWithoutFeedback</Text>
        </TouchableWithoutFeedback>
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
  },
  button: {
    backgroundColor: 'red',
    color: 'white',
    width: 300,
    height: 60
  }
});
