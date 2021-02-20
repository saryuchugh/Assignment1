import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAapMZJGGsYp1oEZzkm9lVt8TdSE1DFJR4",
    authDomain: "grocery-35cc6.firebaseapp.com",
    projectId: "grocery-35cc6",
    storageBucket: "grocery-35cc6.appspot.com",
    messagingSenderId: "74470866046",
    appId: "1:74470866046:web:521f7a5a3cb961a7bcec2f",
    measurementId: "G-Z1F94DX0N4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();