import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FoodieButton from '../Components/FoodieButton';
import FoodieInput from '../Components/FoodieInput';

import { auth } from '../Database';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('Login Screen');
  }, []);

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        getUserDetails(userCredential.user.uid);
        navigation.navigate('LandingPage');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserDetails = async (uid) => {
    const db = getFirestore();
    const docRef = doc(db, 'users', uid);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log('User data:', docSnap.data());
      } else {
        console.log('No such User!');
      }
    } catch (e) {
      console.log('Error getting User:', e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, width: '100%', justifyContent: 'flex-end' }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
          }}>
          Welcome
        </Text>
      </View>
      <View style={{ flex: 0.2, width: '100%', justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 46,
            alignSelf: 'center',
            color: '#F44647',
          }}>
          FOODIE MOODIE
        </Text>
      </View>
      <View style={{ flex: 0.6, width: '100%' }}>
        <FoodieInput
          placeholder="E-mail"
          haveIcon={true}
          keyboardType="default"
          path={require('../assets/icon_mail.png')}
          onChangeText={handleEmailChange}
          secureTextEntry={false}
        />
        <FoodieInput
          placeholder="Password"
          haveIcon={true}
          keyboardType="default"
          path={require('../assets/icon_lock.png')}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text
            style={{
              alignSelf: 'flex-end',
              marginBottom: 22,
              fontSize: 12,
              color: '#5A5B5E',
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <FoodieButton text="Login" onPress={handleLogin} />
        <TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              marginBottom: 22,
              fontSize: 12,
              color: '#5A5B5E',
            }}>
            Or login with
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.2, width: '100%', justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={{
              alignSelf: 'center',
              marginBottom: 22,
              fontSize: 12,
              color: '#5A5B5E',
            }}>
            New to Foodie Moodie? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
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
