import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

export default class App extends Component {
  componentDidMount(){
    // StatusBar.setBackgroundColor('red', true);
    // StatusBar.setHidden(true);
    // StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          hidden={false}
          backgroundColor="lightblue"
          barStyle="dark-content" />
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
