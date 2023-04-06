import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HorList from '../Components/HorList';
import CategoryList from '../Components/CategoryList';
import FoodieInput from '../Components/FoodieInput';

function Home() {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.dot} source={require('../assets/dot.png')} />
      <Text style={styles.text}>Hello Asad Ali!</Text>
      <Text style={styles.heading}>Choose your favourite food</Text>
      <View style={styles.search}>
        <View style={{ flex: 0.8 }}>
          <FoodieInput
            haveIcon={true}
            path={require('../assets/search.png')}
            placeholder="Search"
          />
        </View>
        <View style={{ flex: 0.2 }}>
          <Image
            style={{ width: 30, height: 30 }}
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
    backgroundColor: '#F6F7FB',
    padding: 22,
  },
  dot: {
    width: 40,
    height: 40,
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
});

export default Home;
