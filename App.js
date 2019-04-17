import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, RefreshControl} from 'react-native';

import {ListsService} from './app/services/ListsService';
import ListsView from './app/views/ListsView';

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

  render() {
    const {state} = this;
    return (
      <View style={styles.container}>
        <ScrollView refreshControl={<RefreshControl
                                        refreshing={state.isLoading}
                                        onRefresh={this.getLists}
                                        />}>
          <ListsView lists={state.lists} />
        </ScrollView>
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
