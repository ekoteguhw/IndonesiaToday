import React from 'react';
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/Home'
import DetailScreen from './screens/Detail'

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen
}, {
    initialRouteName: 'Home'
  })

export default RootStack
