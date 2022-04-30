// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import initializeApp = firebase.initializeApp;

const firebaseConfig = {
    apiKey: 'AIzaSyCjpPtNGsSbaOS7BtZWVrWm22mKDcFYgdc',
    authDomain: 'todouvry.firebaseapp.com',
    projectId: 'todouvry',
    storageBucket: 'todouvry.appspot.com',
    messagingSenderId: '485512854712',
    appId: '1:485512854712:web:5c6c58e283d1d9450bc84d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();

export {app, auth};