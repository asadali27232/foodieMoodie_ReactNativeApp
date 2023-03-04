import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

export default function FoodieButton(props) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.font}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        backgroundColor: "#F44647",
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 22,
        marginBottom: 22,
    },
    font: {
        fontSize: 14,
        color: "#ffffff",
    },
})
