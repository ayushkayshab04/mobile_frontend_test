import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreens/HomeScreen';
import { screenNames } from '../utils/screenNames';


const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.HomeScreen}
      screenOptions={{headerShown: false}}> 
       <Stack.Screen
        name={screenNames.HomeScreen}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}
