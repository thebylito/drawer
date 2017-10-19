import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

/* Aqui é a página INICIAL do seu APP depois de ter autenticado*/

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => {
          this.props.navigation.navigate('homeinterna', { nome: 'Cake' })
        }}>
        Ir para a screen Interna de Home
        </Text>
      </View>
    );
  }
}

/* Aqui é a página interna da INICIAL, se necessário no seu APP*/

class HomeInterna extends Component {
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

/* Aqui é a página de SERVIÇOS por exemplo */

class Servicos extends Component {
  /*   constructor(props) {
      super(props)
    } */
  componentWillMount() {
    console.log(this.props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={()=> this.props.navigation.navigate('servicosinterna')}>
        Ir para a screen Interna de Serviços
        </Text>
      </View>
    );
  }
}

/* Aqui é a página interna da SERVIÇOS, se necessário no seu APP*/

class ServicosInterna extends Component {
  /*   constructor(props) {
      super(props)
    } */
  componentWillMount() {
    console.log(this.props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={()=> this.props.navigation.navigate('servicos')}>
          Pagina 4 - Ir para 2
        </Text>
      </View>
    );
  }
}

/* Aqui configuramos o iconezinho de MENU no canto superior esquerdo do APP*/

const botaoMenu = (navigation) => (
	<TouchableOpacity
		onPress={() => {
      console.log(navigation)
      navigation.navigate('DrawerToggle')
      console.log(navigation)
			if (navigation.state.index === 0) {
			} else {
				navigation.navigate('DrawerClose')
			}
		}}
		style={{ flex: 0, paddingLeft: 15 }}>
		<Text>Menu</Text>
	</TouchableOpacity>
)

/* Aqui configuramos a PILHA (Stack) de páginas da HOME e suas internas*/

const HomeStack = StackNavigator({
  home: {
    /* No screen colocamos o nome do componente que exportamos lá em cima*/
    screen: Home,
    /* Aqui são as opções do HEADER desta screen */
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: botaoMenu(navigation)
    })
  },
  homeinterna: {
    /* No screen colocamos o nome do componente que exportamos lá em cima*/
    screen: HomeInterna,
    /* Aqui são as opções do HEADER desta screen */
    navigationOptions: ({ navigation }) => ({
      title: 'Interna da Home'
    })
  }
})

/* Aqui configuramos a PILHA (Stack) de páginas da SERVIÇOS e suas internas*/

const ServicosStack = StackNavigator({
  servicos: {
    /* No screen colocamos o nome do componente que exportamos lá em cima*/
    screen: Servicos,
    /* Aqui são as opções do HEADER desta screen */
    navigationOptions: ({ navigation }) => ({
      title: 'Serviços',
      headerLeft: botaoMenu(navigation)
    })
  },
  servicosinterna: {
    /* No screen colocamos o nome do componente que exportamos lá em cima*/
    screen: ServicosInterna,
    /* Aqui são as opções do HEADER desta screen */
    navigationOptions: ({ navigation }) => ({
      title: 'Interna de Serviços'
    })
  }
})

const DrawerStack = DrawerNavigator({
  homestack: { screen: HomeStack },
  servicosstack: { screen: ServicosStack },
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
  <DrawerNavigation />
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