import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCGyMObCAUnrIBffNl133mqhJjYgbxz4Lc',
  authDomain: 'ecommerce-red-8472b.firebaseapp.com',
  projectId: 'ecommerce-red-8472b',
  storageBucket: 'ecommerce-red-8472b.appspot.com',
  messagingSenderId: '252577174086',
  appId: '1:252577174086:web:5e966c45a77199e5543047',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
