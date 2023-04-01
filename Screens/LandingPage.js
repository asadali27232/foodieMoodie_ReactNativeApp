import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/pizza_background.jpg')}
        style={styles.backgroundImage}></ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LandingPage;
