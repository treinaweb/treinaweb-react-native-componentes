import React, {Component} from 'react';
import {StyleSheet, View, Image, ImageBackground, Text } from 'react-native';


export default class App extends Component {
  componentDidMount(){
    
  }

  render() {
    return (
      <View style={styles.container} >
        <Image style={{width: 150, height: 100}}
        source={{uri: 'https://img1.ibxk.com.br/2017/07/13/13160112901226.jpg?w=700'}} />
        
        <ImageBackground style={{width: 150, height: 100}} source={{uri: 'https://img1.ibxk.com.br/2017/07/13/13160112901226.jpg?w=700'}} >
          <Text style={{color: 'white'}} >Treinaweb</Text>
        </ImageBackground>
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
