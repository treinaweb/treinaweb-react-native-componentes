import React, {Component} from 'react';
import {StyleSheet, View, TextInput } from 'react-native';


export default class App extends Component {

  state = {
    nome: ''
  }

  componentDidMount(){
    
  }

  render() {
    const {state} = this;
    return (
      <View >
        <TextInput 
          keyboardType="default"
          maxLength={20}
          editable={true}
          multiline={true}
          numberOfLines={4}
          style={{borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => { this.setState({nome: text}) }}
          value={state.nome}  />
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
