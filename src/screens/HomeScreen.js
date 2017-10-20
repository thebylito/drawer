import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends Component {
  componentWillMount = () => {
    console.log(this.props)
  }

  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => {
          this.props.navigation.navigate('homeInternaScreen')
        }}>
          Ir para a screen Interna de Home
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
  }
});