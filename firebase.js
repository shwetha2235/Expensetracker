import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqcdDQIRcrghbbB0Mm3GS6LTB6WEcPR7U",
  authDomain: "expense-tracker-31b75.firebaseapp.com",
  projectId: "expense-tracker-31b75",
  storageBucket: "expense-tracker-31b75.firebasestorage.app",
  messagingSenderId: "1062758354674",
  appId: "1:1062758354674:web:6fd00db0bd881642e14a6b",
  measurementId: "G-F1PWSNERY9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;