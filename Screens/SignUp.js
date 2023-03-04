import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default function SignUp() {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>Sign Up</Text>
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
