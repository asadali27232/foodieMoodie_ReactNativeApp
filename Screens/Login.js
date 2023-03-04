import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>Login</Text>
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
