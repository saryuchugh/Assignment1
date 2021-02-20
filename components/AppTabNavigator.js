import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import DataScreen from '../screens/DataScreen'
import Maps from '../screens/Maps'


export const AppTabNavigator = createBottomTabNavigator({
  Home : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/home.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Home Screen",
    }
  },
  Data: {
    screen: DataScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/data.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Data",
    }
  },
  Maps: {
    screen: Maps,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/map.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Maps",
    }
  }
});
