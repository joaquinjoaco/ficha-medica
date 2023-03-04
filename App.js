import React, { useEffect, useState } from 'react';
import { useFonts } from "expo-font";
import Login from './screens/Login';
import Home from './screens/Home';
import Edit from './screens/Edit';
import Scan from './screens/Scan';
import Scanned from './screens/Scanned';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const Stack = createNativeStackNavigator();
  const [currentUser, setCurrentUser] = useState();

  const [loaded] = useFonts({
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Medium': require('./assets/fonts/OpenSans-Medium.ttf'),
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  useEffect(() => {
    console.log("App.js useEffect ran")
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, [])

  if (!loaded) {
    return null;
  } else {
    return <NavigationContainer>

      <StatusBar style="auto" />
      <Stack.Navigator>
        {
          currentUser ?
            <>
              <Stack.Screen name="Home" component={Home} options={{
                headerShown: false,
              }} />
              <Stack.Screen name="Edit" component={Edit} options={{
                headerShown: false,
              }} />
              <Stack.Screen name="Scan" component={Scan} options={{
                headerShown: false,
              }} />
              <Stack.Screen name="Scanned" component={Scanned} options={{
                headerShown: false,
              }} />
            </>
            :
            <Stack.Screen name="Login" component={Login} options={{
              headerShown: false,
            }} />
        }

      </Stack.Navigator>
    </NavigationContainer>

  }
}
