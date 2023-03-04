import React, { useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { CheckBox } from "react-native-elements"
import FoodieButton from "../Components/FoodieButton"
import FoodieInput from "../Components/FoodieInput"
import Label from "../Components/Label"
import Navbar from "../Components/Navbar"

export default function ResetPassword() {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.1, width: "100%" }}>
                <Navbar text="Sign Up" />
            </View>
            <View style={{ flex: 0.8, width: "100%" }}>
                <TouchableOpacity>
                    <Text
                        style={{
                            alignSelf: "flex-start",
                            marginBottom: 22,
                            fontSize: 14,
                            color: "#5A5B5E",
                        }}
                    >
                        Please fill in the fields below to reset you current
                        password.
                    </Text>
                </TouchableOpacity>
                <Label text="New Password" />
                <FoodieInput
                    placeholder="Create Password"
                    haveIcon={false}
                    keyboardType="default"
                />
                <Label text="Confirm New Password" />
                <FoodieInput
                    placeholder="Confirm New Password"
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
