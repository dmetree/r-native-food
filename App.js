import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './src/components/intro/IntroScreen'
import Details from './src/components/details/Details'
import ResultsList from './src/components/intro/results/ResultsList'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={Intro} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
      
      {/* <Stack.Screen name="Results" component={ResultsList} /> */}
    </NavigationContainer>
  );
}


export default App;