import React from "react"
import { StyleSheet, View } from "react-native"
import ForgotPassword from "./Screens/ForgotPassword"
import LandingPage from "./Screens/LandingPage"
import Login from "./Screens/Login"
import ResetPassword from "./Screens/ResetPassword"
import SignUp from "./Screens/SignUp"
import Verification from "./Screens/Verification"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="LandingPage" component={LandingPage} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="Verification" component={Verification} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 22,
    },
})
