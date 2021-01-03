import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDOZOO-aD-iAIgt7W3OBnPZigu8C9DYtdk",
  authDomain: "whatsapp-clone-ed4ab.firebaseapp.com",
  projectId: "whatsapp-clone-ed4ab",
  storageBucket: "whatsapp-clone-ed4ab.appspot.com",
  messagingSenderId: "976627653327",
  appId: "1:976627653327:web:359788d5226c736e76f5ba",
  measurementId: "G-XY1V6376WJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;