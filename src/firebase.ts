import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCv3umqd2ozDwMf0JAy0ae1mSD1dvsE-KI",
    authDomain: "cookup-fdf96.firebaseapp.com",
    databaseURL: "https://cookup-fdf96.firebaseio.com",
    projectId: "cookup-fdf96",
    storageBucket: "cookup-fdf96.appspot.com",
    messagingSenderId: "799177087082",
    appId: "1:799177087082:web:500c6ce83f8ea545a69213",
    measurementId: "G-JMLXNVHS1G"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();