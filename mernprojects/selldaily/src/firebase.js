import firebase from "firebase/app"
// import "firebase/auth"
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyCH4xyxAt_DkEWAA9wFw0QRv16D0Q6ZFRw",
    authDomain: "sell-daily.firebaseapp.com",
    projectId: "sell-daily",
    storageBucket: "sell-daily.appspot.com",
    messagingSenderId: "1014356310093",
    appId: "1:1014356310093:web:eb554b25a374ae69abc404"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
//   }
  
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();