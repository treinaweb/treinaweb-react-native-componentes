import React, {Component} from 'react';
import {StyleSheet, View, Text } from 'react-native';
import {NativeRouter as Router, Route, Link} from 'react-router-native';

import Index from './views/index';
import Contact from './views/contact';

export default class App extends Component {

  componentDidMount(){
    
  }

  render() {
    return (
        <Router>
          <View>
            <View>
              <Link to="/"><Text>Home</Text></Link>
              <Link to="/contact"><Text>Contact</Text></Link>
            </View>
            <Route exact path="/" component={Index} />
            <Route path="/contact" component={Contact} />
          </View>
        </Router>
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
