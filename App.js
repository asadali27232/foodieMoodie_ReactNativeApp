import React from 'react';
import { StyleSheet, View } from 'react-native';
import ForgotPassword from './Screens/ForgotPassword';
import LandingPage from './Screens/LandingPage';
import Login from './Screens/Login';
import ResetPassword from './Screens/ResetPassword';
import SignUp from './Screens/SignUp';
import Verification from './Screens/Verification';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Verification"
            component={Verification}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    padding: 22,
  },
});
