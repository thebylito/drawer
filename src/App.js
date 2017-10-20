import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
// Adicionado addNavigationHelpers REDUX
import { StackNavigator, DrawerNavigator, addNavigationHelpers } from 'react-navigation';
/// Importamos para combinar os reducers
import { combineReducers, createStore } from 'redux';

import { Provider, connect } from 'react-redux';

/* Aqui é a página INICIAL do seu APP depois de ter autenticado*/
import HomeScreen from './screens/HomeScreen'

/* Aqui é a página interna da INICIAL, se necessário no seu APP*/
import HomeInternaScreen from './screens/HomeInternaScreen'

/* Aqui é a página de SERVIÇOS por exemplo */
import ServicosScreen from './screens/ServicosScreen'

/* Aqui é a página interna da SERVIÇOS, se necessário no seu APP*/
import ServicosInternaScreen from './screens/ServicosInternaScreen'

/* Aqui configuramos o iconezinho de MENU no canto superior esquerdo do APP*/
const botaoMenu = (navigation) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('DrawerToggle')
    }}
    style={{ flex: 0, paddingLeft: 15 }}>
    <Text>Menu</Text>
  </TouchableOpacity>
)


/* Aqui configuramos a PILHA (Stack) de páginas da HOME e suas internas*/
const HomeStack = StackNavigator({
  homeScreen: {
    /* No screen colocamos o nome do componente que exportamos lá em cima*/
    screen: HomeScreen,
    /* Aqui são as opções do HEADER desta screen */
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: botaoMenu(navigation)
    })
  },
  homeInternaScreen: {
    /* No screen colocamos o nome do componente que exportamos lá em cima*/
    screen: HomeInternaScreen,
    /* Aqui são as opções do HEADER desta screen */
    navigationOptions: ({ navigation }) => ({
      title: 'Interna da Home'
    })
  }
})

/* Aqui configuramos a PILHA (Stack) de páginas da SERVIÇOS e suas internas*/

const ServicosStack = StackNavigator({
  servicosScreen: {
    /* No screen colocamos o nome do componente que exportamos lá em cima*/
    screen: ServicosScreen,
    /* Aqui são as opções do HEADER desta screen */
    navigationOptions: ({ navigation }) => ({
      /* Aqui fica o titulo da pagina */
      title: 'Serviços',
      
      /* Aqui fica o elemento da esquerda do header de navegacao, la onde fica o titulo da pagina */
      headerLeft: botaoMenu(navigation)
    })
  },
  servicosInternaScreen: {
    /* No screen colocamos o nome do componente que exportamos lá em cima*/
    screen: ServicosInternaScreen,
    /* Aqui são as opções do HEADER desta screen */
    navigationOptions: ({ navigation }) => ({
      title: 'Interna de Serviços'
    })
  }
})

const DrawerStack = DrawerNavigator({
  homeStack: { screen: HomeStack },
  servicosStack: { screen: ServicosStack },
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

  /// Tiramos, pois a exportacao sera pelo redux
/* export default App = props => (
  <PrimaryNav />
); */


///// Trocamos os 'AppNavigator' por 'PrimaryNav' pois é essa a nossa navigation base
const initialState = PrimaryNav.router.getStateForAction(PrimaryNav.router.getActionForPathAndParams('drawerStack'));

const navReducer = (state = initialState, action) => {
  const nextState = PrimaryNav.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const appReducer = combineReducers({
  nav: (state, action) => PrimaryNav.router.getStateForAction(action, state)
});

//// Exemplo de integracao do React-navigation
class App extends Component {
  render() {
    return (
      <PrimaryNav navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer);

/* export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
} */

/*  export default Root = (props) => (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    ); */

  export default function MINHA_CASA_E_REDONDA(props) {
    return(
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  };