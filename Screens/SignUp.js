import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import FoodieButton from '../Components/FoodieButton';
import FoodieInput from '../Components/FoodieInput';
import Label from '../Components/Label';
import Navbar from '../Components/Navbar';

import { auth } from '../Database';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export default function SignUp({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const handleSignUp = () => {
    console.log('Signed Up');
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        userCredential.user.displayName = name;
        navigation.navigate('LandingPage');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log('Sign Up Screen');
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, width: '100%' }}>
        <Navbar text="Sign Up" />
      </View>
      <View style={{ flex: 0.8, width: '100%' }}>
        <Label text="Email" />
        <FoodieInput
          placeholder="E-mail"
          haveIcon={false}
          keyboardType="default"
          onChangeText={handleEmailChange}
        />
        <Label text="Name" />
        <FoodieInput
          placeholder="Full Name"
          haveIcon={false}
          keyboardType="default"
          onChangeText={handleNameChange}
        />
        <Label text="Password" />
        <FoodieInput
          placeholder="Create Password"
          haveIcon={false}
          keyboardType="default"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />
        <Label text="Confirm Password" />
        <FoodieInput
          placeholder="Confirm Password"
          haveIcon={false}
          keyboardType="default"
          secureTextEntry={true}
          onChangeText={handleConfirmPasswordChange}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginTop: -15,
            marginBottom: 10,
          }}>
          <CheckBox
            style={{
              flex: 0.1,
              alignSelf: 'flex-start',
            }}
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />
          <TouchableOpacity
            style={{
              flex: 0.9,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#5A5B5E',
              }}>
              I accept the{' '}
              <Text style={{ fontWeight: 'bold' }}>Terms of Use </Text>
              and <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <FoodieButton text="Create Account" onPress={handleSignUp} />
        <TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              marginBottom: 22,
              fontSize: 12,
              color: '#5A5B5E',
            }}>
            Or sign up with
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.2,
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              alignSelf: 'center',
              marginBottom: 22,
              fontSize: 12,
              color: '#5A5B5E',
            }}>
            Already on Foodie Moodie? Sign in
          </Text>
        </TouchableOpacity>
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
