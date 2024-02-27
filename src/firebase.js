// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "./firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDLV1diJ4sTK3ms7Nx4vXtXawigWLD8BiA",
    authDomain: "clone-74b8a.firebaseapp.com",
    projectId: "clone-74b8a",
    storageBucket: "clone-74b8a.appspot.com",
    messagingSenderId: "164654479054",
    appId: "1:164654479054:web:bcf4f13b97c9db314ec29f",
    measurementId: "G-XTHFX04WWM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //This initializes an app for us in the firebase like a django app
const db = firebaseApp.firestore(); // This line is gonna create a db out for us in the firebaseapp
const auth = firebase.auth(); // This is gonna maintain the authorization stuffs, This will provide a key kinda a thing to handle the user authentication


export {db,auth};