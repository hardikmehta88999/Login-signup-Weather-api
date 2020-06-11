import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKgjiOwi0gFcIb5dDVPu0mrj5m5KTu4OM",
  authDomain: "todo-35bcb.firebaseapp.com",
  databaseURL: "https://todo-35bcb.firebaseio.com",
  projectId: "todo-35bcb",
  storageBucket: "todo-35bcb.appspot.com",
  messagingSenderId: "477861836385",
  appId: "1:477861836385:web:c8c5da346fd62543ea9c20",
  measurementId: "G-WXJQTM5TEM"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
export default firebase;