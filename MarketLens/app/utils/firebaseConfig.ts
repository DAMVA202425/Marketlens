import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  browserLocalPersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlDaDtZk7PpI19bamK3V8HpIMMHyF5HCM",
  authDomain: "marketlentsback.firebaseapp.com",
  projectId: "marketlentsback",
  storageBucket: "marketlentsback.firebasestorage.app",
  messagingSenderId: "7756837158",
  appId: "1:7756837158:web:ae856f79c2eb5ee8e191e7",
  measurementId: "G-3JVQM3BKCC",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: browserLocalPersistence,
});

export default auth;
