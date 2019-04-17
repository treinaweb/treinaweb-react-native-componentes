import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, RefreshControl} from 'react-native';

import {ListsService} from './app/services/ListsService';
import ListsView from './app/views/ListsView';
import List from './app/components/List';

export default class App extends Component {
  state = {
    lists: [],
    isLoading: false
  }

  async componentDidMount(){
    await this.getLists();
  }

  getLists = async () => {
    this.setState({isLoading: true});
    const lists = await ListsService.list();
    this.setState({lists, isLoading: false});
    return lists;
  }

  removeList = (listToRemove) => {
    const lists = this.state.lists.filter(list => list.id !== listToRemove.id);
    this.setState({lists});
    ListsService.remove(listToRemove.id);
  }

  render() {
    const {state} = this;
    return (
      <View style={styles.container}>
      {/*
        <ScrollView refreshControl={<RefreshControl
                                        refreshing={state.isLoading}
                                        onRefresh={this.getLists}
                                        />}>
          <ListsView lists={state.lists} onRemove={this.removeList} />
        </ScrollView>
        */}
        <List />
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
