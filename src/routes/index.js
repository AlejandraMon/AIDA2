import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
//screens
import {Login, RegisterUser, Dashboard} from './../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Router() {
  return (
    
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Login} 
      options={{title: '.',
      headerStyle:{
          backgroundColor: '#1e90ff'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          }}/>
      <Stack.Screen name="Registro nuevo" component={RegisterUser}/>
      <Stack.Screen name="Inicio" component={Dashboard}/>
    </Stack.Navigator>
    
  );
}

