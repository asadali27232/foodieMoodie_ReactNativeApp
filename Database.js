// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDp5WSgysJgAB9_7eDQN6DZzFxciXGD8OA',
  authDomain: 'foodiemoodiedatabase.firebaseapp.com',
  projectId: 'foodiemoodiedatabase',
  storageBucket: 'foodiemoodiedatabase.appspot.com',
  messagingSenderId: '1080995849179',
  appId: '1:1080995849179:web:8a6ce9351e31afa0517dfe',
  measurementId: 'G-46QPXLFZVZ',
  databaseURL: 'https://foodiemoodiedatabase-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);

export { app, auth };
