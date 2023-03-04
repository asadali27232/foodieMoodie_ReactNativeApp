import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import FoodieButton from "../Components/FoodieButton"
import FoodieInput from "../Components/FoodieInput"

export default function Login() {
    return (
        <View style={styles.container}>
            <FoodieInput
                placeholder="E-mail"
                haveIcon={true}
                keyboardType="numeric"
                path={require("../assets/icon_mail.png")}
            />
            <FoodieInput
                placeholder="Password"
                haveIcon={true}
                keyboardType="default"
                path={require("../assets/icon_lock.png")}
            />
            <FoodieButton text="Login" />
            <StatusBar style="auto" />
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
    },
})
