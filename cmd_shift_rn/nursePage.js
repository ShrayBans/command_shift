import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class nursePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      nurseData = {}
    };
    this.fetchNurses = this.fetchNurses.bind(this);
  }

  componentDidMount(){
    this.setState({nurseData: this.fetchNurses()});
  }

  this.fetchNurses(){
    fetch('http://localhost:3000/json').then(function(err, data){
        data.filter(function(nurse){
          return nurse.name === nurseName;
        })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = nursePage;
