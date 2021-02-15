import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHLegCQdR3YzDQsBpjCXbsxoyFsR9sRWA",
    authDomain: "clone-f0b72.firebaseapp.com",
    databaseURL: "https://clone-f0b72.firebaseio.com",
    projectId: "clone-f0b72",
    storageBucket: "clone-f0b72.appspot.com",
    messagingSenderId: "53972149691",
    appId: "1:53972149691:web:012510fb3857774734d09e",
    measurementId: "G-GDP13NSCEM"
});

const auth = firebaseApp.auth();

export {auth};