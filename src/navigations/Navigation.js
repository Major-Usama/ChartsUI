// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CardClickScreen from '../screens/CardClickScreen';


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
        options={{ title: 'Home',
        headerStyle: {
          backgroundColor: 'skyblue',
                  },

                  headerTintColor: '#ffffff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
      
      }}
        name="Home" component={HomeScreen} />
        <Stack.Screen
        options={{ title: '',
        headerStyle: {
          backgroundColor: 'skyblue',
                  },

                  headerTintColor: '#ffffff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
      
      }}
        name="CardClickScreen" component={CardClickScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;