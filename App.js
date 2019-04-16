import React, {Component} from 'react';
import {StyleSheet, View, Switch} from 'react-native';


export default class App extends Component {

  state = {
    isActive: false
  }

  componentDidMount(){
    
  }

  render() {
    const {state} = this;
    return (
      <View >
        <Switch 
          onValueChange={(isActive) => { this.setState({isActive}) }}
          value={state.isActive}  />
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
