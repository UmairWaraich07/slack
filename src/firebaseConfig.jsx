import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYLaJt5e2AFV9ipzke9cQ0j_GN0E18zM0",
  authDomain: "slack-clone-214ae.firebaseapp.com",
  projectId: "slack-clone-214ae",
  storageBucket: "slack-clone-214ae.appspot.com",
  messagingSenderId: "439153713537",
  appId: "1:439153713537:web:032f7c45be639f32d54880",
  measurementId: "G-2D6PQ9K4CB",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
