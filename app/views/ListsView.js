import React, {Component} from 'react';
import {View, FlatList} from 'react-native';

import SimpleList from '../components/SimpleList';

class ListsView extends Component{
    static defaultProps = {
        lists: [],
        onRemove: () => {}
    }

    keyExtractor(item){
        return item.id;
    }

    render(){
        const {props} = this,
            {lists} = props;
        return (
            <View style={{flex: 1}} >
                <FlatList
                    data={lists}
                    keyExtractor={this.keyExtractor}
                    renderItem={({item}) => <SimpleList list={item} onRemove={this.props.onRemove} />}
                    numColumns={3}
                />
            </View>
        );
    }
}

export default ListsView;