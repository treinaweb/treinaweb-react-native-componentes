import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';


export default class App extends Component {
  componentDidMount(){
    
  }

  render() {
    return (
      <View >
        <Button title="CLICK ME" color="red" onPress={() => {}} />
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
