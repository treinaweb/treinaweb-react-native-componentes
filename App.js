import React, {Component} from 'react';
import {StyleSheet, View, ProgressBarAndroid, ProgressViewIOS, Platform } from 'react-native';

export default class App extends Component {
  componentDidMount(){
    
  }

  render() {
    return (
      <View style={styles.container}>
        {
          ( Platform.OS === 'android' ) ?
          (<ProgressBarAndroid progress={0.6} 
            progressTintColor="#0062ac"
            styleAttr="Horizontal"
            indeterminate={false}
             />)
          :
          (<ProgressViewIOS progress={0.6}
            progressTintColor="#0062ac" />)
        }
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
