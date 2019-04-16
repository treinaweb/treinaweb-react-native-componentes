import React, {Component} from 'react';
import {StyleSheet, View, Text, Slider } from 'react-native';


export default class App extends Component {

  state = {
    value: 10
  }

  componentDidMount(){
    
  }

  render() {
    const {state} = this;
    return (
      <View >
        <Text>{state.value}</Text>
        <Slider 
          onValueChange={(value) => {this.setState({value})}}
          value={state.state}
          minimumValue={5} 
          maximumValue={20} 
          step={5}  />
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
