import React from "react"
import { StyleSheet, View, Text } from "react-native-web"

export default function ForgotPassword() {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>Button</Text>
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
