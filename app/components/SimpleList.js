import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

class SimpleList extends Component{
    static defaultProps = {
        list: {}
    }
    render(){
        const  {props} = this,
            {list} = props,
            {width} = Dimensions.get('window'),
            picture = list.picture || 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png';
        return (
            <View style={{width: (width/3 - 8), margin: 2, marginBottom: 30, borderWidth: 1, borderColor: '#aaa', padding: 5}} >
                <Image source={{uri: picture}} style={{height: width/3-8}} />
                <Text style={{fontWeight: 'bold'}} >{list.title}</Text>
            </View>
        );
    }
}

export default SimpleList;