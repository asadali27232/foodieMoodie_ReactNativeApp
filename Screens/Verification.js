import React from "react"
import { StyleSheet, View, Text } from "react-native"
import FoodieButton from "../Components/FoodieButton"
import FoodieInput from "../Components/FoodieInput"
import Label from "../Components/Label"
import Navbar from "../Components/Navbar"

export default function Verification() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.1, width: "100%" }}>
                <Navbar text="OTP Number" />
            </View>
            <View style={{ flex: 0.8, width: "100%", alignItems: "center" }}>
                <Text
                    style={{
                        marginBottom: 12,
                        fontSize: 22,
                    }}
                >
                    Enter Authorization Code
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: "#5A5B5E",
                    }}
                >
                    We have sent SMS to:
                </Text>
                <Label text="+62 (XXX) XXX-X12" />
                <FoodieInput
                    placeholder="Email"
                    haveIcon={false}
                    keyboardType="default"
                />
                <FoodieButton text="Done" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    font: {
        fontSize: 26,
    },
})
