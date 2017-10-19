import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Servicos extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => this.props.navigation.navigate('servicosInternaScreen')}>
          Ir para a screen Interna de Serviços
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