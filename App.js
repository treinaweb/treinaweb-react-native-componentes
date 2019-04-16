import React, {Component} from 'react';
import {StyleSheet, View, Button, Modal } from 'react-native';


export default class App extends Component {
  state = {
    isModalOpen: false
  }
  componentDidMount(){
    
  }

  render() {
    const {state} = this;
    return (
      <View>
        <Button title="Abrir" onPress={() => this.setState({isModalOpen: true})} />

        <Modal
          animationType="slide"
          visible={state.isModalOpen}
          transparent={false}
          onShow={() => {}}
          onRequestClose={() => {}}
          >
          <View>
            <Button title="Fechar" onPress={() => this.setState({isModalOpen: false})} />
          </View>
        </Modal>
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
