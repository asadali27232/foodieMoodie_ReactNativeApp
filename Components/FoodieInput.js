import React from "react"
import { StyleSheet, View, TextInput, Image } from "react-native"

export default function FoodieInput(props) {
    const [number, setNumber] = React.useState("")
    return (
        <View style={styles.inputContainer}>
            {props.haveIcon == true && (
                <Image source={props.path} style={styles.icon} />
            )}
            <TextInput
                style={styles.input}
                onChangeText={setNumber}
                value={number}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                underlineColorAndroid="transparent"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FBFCFF",
        borderRadius: 22,
        marginBottom: 22,
    },
    input: {
        flex: 1,
        height: 60,
        fontSize: 12,
        justifyContent: "center",
        marginStart: 30,
        color: "#383F53",
        fontSize: 12,
    },
    icon: {
        marginStart: 30,
        height: 26,
        width: 26,
    },
})
