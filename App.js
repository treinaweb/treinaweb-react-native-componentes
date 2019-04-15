import React, {Component} from 'react';
import {StyleSheet, View, SectionList, Text } from 'react-native';

const myList = [];
for(let i = 0; i < 20; i++){
  myList.push({id: i.toString()});
}

export default class App extends Component {
  componentDidMount(){
  }

  keyExtractor(item){
    return item.id;
  }

  render() {
    return (
      <View  >
        <SectionList 
          
          ref={(item) => this.item = item}
          keyExtractor={this.keyExtractor}
          renderItem={({item}) => <Text style={{backgroundColor: 'lightblue', margin: 5}} >{item.id}</Text>}

          sections={
            [
              {title: 'TITULO 1', data: myList},
              {title: 'TITULO 2', data: myList},
              {title: 'TITULO 3', data: myList},
            ]
          }

          stickySectionHeadersEnabled={true}
          renderSectionHeader={({section: {title}}) => <Text style={{fontWeight: 'bold', backgroundColor: 'salmon'}} >{title}</Text>}
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
