import React from "react";
import { StyleSheet, View, Text } from "react-native";
import FoodieButton from "../Components/FoodieButton";
import FoodieInput from "../Components/FoodieInput";
import Label from "../Components/Label";
import Navbar from "../Components/Navbar";

export default function ForgotPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, width: "100%" }}>
        <Navbar text="Forgot Password" />
      </View>
      <View style={{ flex: 0.8, width: "100%" }}>
        <Label text="Enter you email" />
        <Text
          style={{
            alignSelf: "flex-start",
            marginBottom: 22,
            fontSize: 14,
            color: "#5A5B5E",
          }}>
          We need to verify you. We will send you a one-time authorization code.
        </Text>
        <FoodieInput
          placeholder="Email"
          haveIcon={false}
          keyboardType="default"
        />
        <FoodieButton text="Done" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  font: {
    fontSize: 26,
  },
});
