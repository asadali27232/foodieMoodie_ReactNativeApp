import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default function ForgotPassword() {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>Forgot Password</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    font: {
        fontSize: 26,
    },
})
