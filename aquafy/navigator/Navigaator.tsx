import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import FishFeed from '../screens/FishFeed';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const Navigaator = () => {
  return (
    <Tab.Navigator
   
    screenOptions={({ route }) => ({
        headerStyle: {
            height: 10,
            backgroundColor: '#bcd2f0' // Set the desired height for the top bar
          },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'fast-food' : 'fast-food-outline';          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Feed" component={FishFeed} />
    </Tab.Navigator>
  )
}

export default Navigaator