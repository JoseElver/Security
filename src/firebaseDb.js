import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyADOeFq2piy-ruHgryG9rpTNAdiPrJK2GM",
    authDomain: "security-c0ba0.firebaseapp.com",
    databaseURL: "https://security-c0ba0-default-rtdb.firebaseio.com",
    projectId: "security-c0ba0",
    storageBucket: "security-c0ba0.appspot.com",
    messagingSenderId: "154469694463",
    appId: "1:154469694463:web:711ea366aa0bb6632bc5ca"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
 
export const db = firebaseApp.firestore();
