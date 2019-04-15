import React, {Component} from 'react';
import {StyleSheet, View, ToolbarAndroid } from 'react-native';

const icon = {uri: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-question-icon.png'};

export default class App extends Component {
  componentDidMount(){
    
  }

  handleAction(position){
    console.log(position);
  }

  render() {
    return (
      <View>
        <ToolbarAndroid 
          title="Meu App"
          subtitle="Desc. App"
          navIcon={icon}
          titleColor="white"
          subtitleColor="red"
          actions={[
            {
              title: 'Config.',
              show: 'always',
              icon: icon
            },
            {
              title: 'Config.',
              show: 'always',
              icon: icon
            }
          ]}
          style={{
            backgroundColor: '#8196F3',
            height: 56
          }}
          onActionSelected={this.handleAction}
          onIconClicked={this.handleAction}
         />
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
