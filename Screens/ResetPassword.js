import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FoodieButton from '../Components/FoodieButton';
import FoodieInput from '../Components/FoodieInput';
import Label from '../Components/Label';
import Navbar from '../Components/Navbar';

export default function ResetPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, width: '100%' }}>
        <Navbar text="Reset Password" />
      </View>
      <View style={{ flex: 0.8, width: '100%' }}>
        <Text
          style={{
            alignSelf: 'flex-start',
            marginBottom: 22,
            fontSize: 14,
            color: '#5A5B5E',
          }}>
          Please fill in the fields below to reset you current password.
        </Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  font: {
    fontSize: 26,
  },
});
