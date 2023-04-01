import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import FoodieButton from '../Components/FoodieButton';

function LandingPage({ navigation }) {
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleSignup = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/pizza_background.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.skipView}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topView}>
          <Text
            style={{
              fontSize: 46,
              alignSelf: 'center',
              color: '#fff',
            }}>
            FOODIE MOODIE
          </Text>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.heading}>
            Enjoy your fast food delivery only in Foodie Moodie
          </Text>
          <Text style={styles.text}>
            Here is the place to buy food you want
          </Text>
          <FoodieButton text="Login" onPress={handleLogin}></FoodieButton>
          <FoodieButton text="Signup" onPress={handleSignup}></FoodieButton>
        </View>
      </ImageBackground>
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  skipView: {
    flex: 0.1,
    padding: 22,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  topView: {
    flex: 0.5,
    padding: 22,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  skip: {
    marginTop: 8,
    fontSize: 16,
    color: '#fff',
  },
  bottomView: {
    flex: 0.4,
    padding: 22,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#fff',
  },
  text: {
    marginTop: 12,
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
  },
});

export default LandingPage;
