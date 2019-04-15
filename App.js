import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

export default class App extends Component {
  componentDidMount(){
    
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color="red" animating={true} />
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
