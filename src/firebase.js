import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAujMyd4-Jd1A6RDNQwlp2UKNJT-4lLovI",
  authDomain: "chatapp-e0149.firebaseapp.com",
  projectId: "chatapp-e0149",
  storageBucket: "chatapp-e0149.appspot.com",
  messagingSenderId: "152780587306",
  appId: "1:152780587306:web:debe99ef7f5059386c1e53",
  measurementId: "G-EV1JPSX8N0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
