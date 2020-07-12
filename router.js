import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import About from './components/About';
import PokemonView from './components/PokemonView';
import PokemonStats from './components/PokemonStats';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="PokemonView" component={PokemonView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
