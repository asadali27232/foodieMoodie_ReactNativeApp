import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Landing Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  font: {
    fontSize: 26,
  },
});
