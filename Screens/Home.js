import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import HorList from '../Components/HorList';
import CategoryList from '../Components/CategoryList';

function Home() {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.dot} source={require('../assets/dot.png')} />
      <Text style={styles.text}>Hello Asad Ali!</Text>
      <Text style={styles.heading}>Choose your favourite food</Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Image
            style={{ width: 30, height: 30, marginBottom: 15 }}
            source={require('../assets/search.png')}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter text here..."
          placeholderTextColor="#8c8c8c"
        />
        <View style={styles.iconContainer}>
          <Image
            style={{ width: 30, height: 30, marginBottom: 15 }}
            source={require('../assets/sq.png')}
          />
        </View>
      </View>
      <CategoryList />
      <HorList />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 22,
  },
  dot: {
    width: 50,
    height: 50,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#001B3D',
    marginTop: 12,
  },
  text: {
    marginTop: 14,
    fontSize: 18,
    color: '#001B3D',
    fontWeight: 'bold',
  },
  search: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDFDFD',
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 5,
    borderRadius: 12,
    marginVertical: 20,
  },
  iconContainer: {
    padding: 5,
    borderRadius: 5,
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#000',
  },
});

export default Home;
