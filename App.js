import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView } from 'react-native';


export default class App extends Component {
  componentDidMount(){
    
  }

  render() {
    return (
      <ScrollView>
        <TextInput placeholder="A" style={styles.input} />
        <TextInput placeholder="B" style={styles.input} />
        <TextInput placeholder="C" style={styles.input} />
        <TextInput placeholder="D" style={styles.input} />
        <TextInput placeholder="E" style={styles.input} />
        <TextInput placeholder="F" style={styles.input} />
        <TextInput placeholder="G" style={styles.input} />
        <TextInput placeholder="H" style={styles.input} />
        <TextInput placeholder="I" style={styles.input} />
        <TextInput placeholder="J" style={styles.input} />
        <TextInput placeholder="K" style={styles.input} />
        <TextInput placeholder="L" style={styles.input} />
        <TextInput placeholder="M" style={styles.input} />
      </ScrollView>
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
  input: {
    borderWidth: 1,
    borderColor:  'gray',
    width: 200,
    height: 60
  }
});
