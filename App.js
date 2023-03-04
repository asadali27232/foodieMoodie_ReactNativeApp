import { StyleSheet, View } from "react-native"
import ForgotPassword from "./Screens/ForgotPassword"
import LandingPage from "./Screens/LandingPage"
import Login from "./Screens/Login"
import ResetPassword from "./Screens/ResetPassword"
import SignUp from "./Screens/SignUp"
import Verification from "./Screens/Verification"

export default function App() {
    return (
        <View style={styles.container}>
            <Verification />
        </View>
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
