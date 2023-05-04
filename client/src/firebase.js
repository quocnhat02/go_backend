import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBZqyiQ56BbOXzsaWxSxv-obadWW0c_86E',
  authDomain: 'ecommerce-9c418.firebaseapp.com',
  projectId: 'ecommerce-9c418',
  storageBucket: 'ecommerce-9c418.appspot.com',
  messagingSenderId: '944361013805',
  appId: '1:944361013805:web:fbebe27e7aef25fee76ea4',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
