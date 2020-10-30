const ClietId = 'QiDdrpoL1__Pp8VR8H1uQw';
const ApiKey = 'QL-xUnA5CbTgEgVSFw-nZoUaXOMGS7JgOtvOiAGJ745pjN4dihke9o-ihbpsgn_rBD5wZv12ymCFp-c4_dvOZMDbhycbw-KW6OlPw_eKLEwxSZb0dXvcI7A3oUKZX3Yx'


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './src/components/intro/IntroScreen'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Resto Search" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;