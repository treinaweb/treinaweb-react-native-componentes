import React, {Component} from 'react';
import {StyleSheet, View, Text, Picker } from 'react-native';


export default class App extends Component {

  state = {
    item: ''
  }

  componentDidMount(){
    
  }

  render() {
    const {state} = this;
    return (
      <View >
        <Text>{state.item}</Text>
        <Picker
          style={{height: 50, width: 150}}
          selectedValue={state.item}
          onValueChange={(itemValue, itemIndex) => {this.setState({item: itemValue})}}
        >
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Python" value="py" />
          <Picker.Item label="Ruby" value="rb" />
        </Picker>
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
