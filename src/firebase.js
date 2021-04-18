import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7a16bkQEKwN-s9E0ImBa09Uw91fJSzfo",
  authDomain: "sidani-slack-clone.firebaseapp.com",
  projectId: "sidani-slack-clone",
  storageBucket: "sidani-slack-clone.appspot.com",
  messagingSenderId: "456978112064",
  appId: "1:456978112064:web:62b66446188f897f5bc9a5",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
