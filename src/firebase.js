import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLV1diJ4sTK3ms7Nx4vXtXawigWLD8BiA",
  authDomain: "clone-74b8a.firebaseapp.com",
  projectId: "clone-74b8a",
  storageBucket: "clone-74b8a.appspot.com",
  messagingSenderId: "164654479054",
  appId: "1:164654479054:web:bcf4f13b97c9db314ec29f",
  measurementId: "G-XTHFX04WWM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };