import firebase from 'firebase';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDMZ2qBgEHDvEDjRlu5f3Bom0ZR9dUlkf0",
  authDomain: "first-c637a.firebaseapp.com",
  databaseURL: "https://first-c637a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "first-c637a",
  storageBucket: "first-c637a.appspot.com",
  messagingSenderId: "453438445153",
  appId: "1:453438445153:web:a27bd78e89d84e9a9b7c20",
  measurementId: "G-FMLJYX3ZGL"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;