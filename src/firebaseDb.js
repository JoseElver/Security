import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC14LCkvpg73jA6hEItnpEffYf9amVQv3o",
    authDomain: "security-7fc89.firebaseapp.com",
    projectId: "security-7fc89",
    storageBucket: "security-7fc89.appspot.com",
    messagingSenderId: "1085465386919",
    appId: "1:1085465386919:web:0e4790fe9fc5a1a6946082"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
 
export const db = firebaseApp.firestore();

export const storage = firebase.storage()


