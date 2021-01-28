import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANtnZb0HJEgE6gCLlaP1R6gDL3GHR6SNQ",
  authDomain: "fir-806ed.firebaseapp.com",
  projectId: "fir-806ed",
  storageBucket: "fir-806ed.appspot.com",
  messagingSenderId: "678298467749",
  appId: "1:678298467749:web:ab692def050be3d29b7c4c",
  measurementId: "G-XNSV7RNWQT"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth =firebase.auth();
export {db ,auth};