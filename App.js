import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import { AppTabNavigator } from './components/AppTabNavigator';
import WelcomeScreen from './screens/WelcomeScreen'


export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab: {screen: AppTabNavigator},
  Drawer :{screen:AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
