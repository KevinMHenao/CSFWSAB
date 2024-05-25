import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Catalog from './screens/Catalog';
import Garage from './screens/Garage';
import TestDrive from './screens/TestDrive';
import Contact from './screens/Contact';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pantalla">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Catalog" component={Catalog} />
        <Stack.Screen name="Garage" component={Garage} />
        <Stack.Screen name="TestDrive" component={TestDrive} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
