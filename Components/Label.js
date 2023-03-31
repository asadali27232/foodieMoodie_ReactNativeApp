import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ForgotPassword(props) {
  return <Text style={styles.font}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  font: {
    fontSize: 16,
    marginBottom: 10,
  },
});
