import React, {Component} from 'react';
import {StyleSheet, View, Text } from 'react-native';


export default class App extends Component {
  state = {
    counter: 0
  }

  componentDidMount(){
    
  }

  handleCounter = ()=>{
    this.setState(({counter}) => {
      return {counter: counter+1};
    })
  }

  render() {
    const {state} = this;
    return (
      <View style={styles.container}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}

        onResponderGrant={this.handleCounter}
        onResponderMove={this.handleCounter}
        onResponderRelease={this.handleCounter}
      >
        <Text>Counter: {state.counter}</Text>
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
