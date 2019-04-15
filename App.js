import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text } from 'react-native';

const myList = [];
for(let i = 0; i < 40; i++){
  myList.push({id: i.toString()});
}

export default class App extends Component {
  componentDidMount(){
    setTimeout(() => {
      //this.item.scrollToIndex({index: 20})
      //this.item.scrollToItem({item: {}})
      //this.item.scrollToEnd()
    }, 2000)
  }

  keyExtractor(item){
    return item.id;
  }

  render() {
    return (
      <View style={styles.container} >
        <FlatList 
          data={myList}
          ref={(item) => this.item = item}
          keyExtractor={this.keyExtractor}
          renderItem={({item}) => <Text>{item.id}</Text>}

          ListEmptyComponent={() => <Text>Nenhum Item</Text>}
          
          ListHeaderComponent={() => <Text>TOP</Text>}
          ItemSeparatorComponent={() => <Text>SEP</Text>}
          ListFooterComponent={() => <Text>BOTTOM</Text>}
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
