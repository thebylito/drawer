import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Screen1Screen from './screens/Screen1Screen'
import Screen2Screen from './screens/Screen2Screen'
import Screen3Screen from './screens/Screen3Screen'
import Screen4Screen from './screens/Screen4Screen'






const botaoMenu = (navigation) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('DrawerToggle')
    }}
    style={{ flex: 0, paddingLeft: 15 }}>
    <Text>Menu</Text>
  </TouchableOpacity>
)

const Telas1e2 = StackNavigator({
  screen1Screen: {
    screen: Screen1Screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1',
      headerLeft: botaoMenu(navigation)
    })
  },
  screen2Screen: {
    screen: Screen2Screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 2'
    })
  }
})

const Telas3e4 = StackNavigator({
  screen3Screen: {
    screen: Screen3Screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 3',
      headerLeft: botaoMenu(navigation)
    })
  },
  screen4Screen: {
    screen: Screen4Screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 4'
    })
  }
})

const DrawerStack = DrawerNavigator({
  telas1e2: { screen: Telas1e2 },
  telas3e4: { screen: Telas3e4 },
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
