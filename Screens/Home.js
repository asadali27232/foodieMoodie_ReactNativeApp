import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HorList from '../Components/HorList';

function Home() {
  return (
    <View style={styles.container}>
      <HorList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    padding: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
