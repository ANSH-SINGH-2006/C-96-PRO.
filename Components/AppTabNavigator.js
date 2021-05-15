import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import EncryptScreen from '../screens/EncryptScreen'
import DecryptScreen from '../screens/DecryptScreen'

export const AppTabNavigator = createBottomTabNavigator({
    Encrypt : {
      screen: EncryptScreen,
      navigationOptions :{
        tabBarIcon : <Image source={require("../assets/book.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "LEARN",
      }
    },
    Decrypt: {
      screen: DecryptScreen,
      navigationOptions :{
        tabBarIcon : <Image source={require("../assets/coding.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "CODE",
      }
    }
  });

