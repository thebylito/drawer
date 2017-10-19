import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Screen3Screen extends Component {
    componentWillMount() {
      console.log(this.props)
    }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome} onPress={() => this.props.navigation.navigate('screen4Screen')}>
            Pagina 3 - Clique para ir para pagina 4
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