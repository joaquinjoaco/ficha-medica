import React from 'react';
import { useFonts } from "expo-font";
import Login from './screens/Login';
import Home from './screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Edit from './screens/Edit';
import Steps from './screens/Edit/Steps';

export default function App() {

  const Stack = createNativeStackNavigator();

  const [loaded] = useFonts({
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Medium': require('./assets/fonts/OpenSans-Medium.ttf'),
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });


  if (!loaded) {
    return null;
  } else {
    return <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false,
        }} />
        {/* <Stack.Screen name="Edit" component={Edit} options={{
          headerShown: false,
        }} /> */}
        <Stack.Screen name="Steps" component={Steps} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  }

}
