import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text, RefreshControl } from 'react-native';

const myList = [];
for(let i = 0; i < 20; i++){
  myList.push({id: i.toString()});
}

export default class App extends Component {
  state = {
    isLoading: false,
    myList
  }

  componentDidMount(){
    
  }

  keyExtractor(item){
    return item.id;
  }

  update = () => {
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({
        isLoading: false,
        myList: [
          {id: '123'},
          {id: '456'},
          {id: '789'}
        ]
      })
    }, 5000)
  }

  render() {
    const {state} = this;
    return (
      <View style={styles.container} >
        <FlatList 
          data={state.myList}
          ref={(item) => this.item = item}
          keyExtractor={this.keyExtractor}
          renderItem={({item}) => <Text>{item.id}</Text>}
          refreshControl={
            <RefreshControl refreshing={state.isLoading} onRefresh={this.update} />
          }
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
