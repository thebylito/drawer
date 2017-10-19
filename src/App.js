import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

class Pagina1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => {
          this.props.navigation.navigate('pagina2', { nome: 'Cake' })
        }}>
          Pagina 1 - Clique para ir para pagina 2
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
class Pagina3 extends Component {
  /*   constructor(props) {
      super(props)
    } */
  componentWillMount() {
    console.log(this.props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={()=> this.props.navigation.navigate('pagina4')}>
        Pagina 3 - Clique para ir para pagina 4
        </Text>
      </View>
    );
  }
}
class Pagina4 extends Component {
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
          Pagina 4
        </Text>
      </View>
    );
  }
}
const Telas1e2 = StackNavigator({
  pagina1: {
    screen: Pagina1,
    navigationOptions: ({ navigation }) => ({
      title: 'Pagina 1'
    })
  },
  pagina2: {
    screen: Pagina2,
    navigationOptions: ({ navigation }) => ({
      title: 'Pagina 2'
    })
  }
})

const Telas3e4 = StackNavigator({
  pagina3: {
    screen: Pagina3,
    navigationOptions: ({ navigation }) => ({
      title: 'Pagina 3'
    })
  },
  pagina4: {
    screen: Pagina4,
    navigationOptions: ({ navigation }) => ({
      title: 'Pagina 4'
    })
  }
})

const DrawerStack = DrawerNavigator({
  telas1e2: { screen: Telas1e2 },
  telas3e4: { screen: Telas3e4 },
},{
  navigationOptions: ({ navigation }) => ({
    headerRight: <Text>Oi</Text>
  })
})

  const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack },
  }, {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#004274' },
      headerTintColor: 'white',
      gesturesEnabled: true,
    })
  })

const PrimaryNav = StackNavigator({
  drawerStack: { screen: DrawerNavigation },
}, {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
    })
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
