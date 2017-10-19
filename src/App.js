import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Pagina1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => {
          this.props.navigation.navigate('pagina2', { nome: 'Cake' })
        }}>
          Pagina 1
        </Text>
      </View>
    );
  }
}

class Pagina2 extends Component {
/*   constructor(props) {
    super(props)
  } */
  componentWillMount() {
    console.log(this.props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Pagina 2
        </Text>
      </View>
    );
  }
}

const PrimaryNav = StackNavigator({
  pagina1: { screen: Pagina1 },
  pagina2: { screen: Pagina2 },

})

export default App = props => (
  <PrimaryNav />
);




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
