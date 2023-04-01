import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Home() {
  return (
    <View>
      <Text style={{ fontSize: 50 }}>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Home;
