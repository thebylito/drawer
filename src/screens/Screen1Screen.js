import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Screen1Screen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome} onPress={() => {
            this.props.navigation.navigate('screen2Screen', { nome: 'Cake' })
          }}>
            Pagina 1 - Clique para ir para Screen 2
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