import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQhGGIh8EjREYhl9eV4xzYm1aLyiXcu5M",
    authDomain: "prepwise-a3a0b.firebaseapp.com",
    projectId: "prepwise-a3a0b",
    storageBucket: "prepwise-a3a0b.firebasestorage.app",
    messagingSenderId: "138122349037",
    appId: "1:138122349037:web:2de08519afb60fa2d73fe4",
    measurementId: "G-J8093L5C77"
};

const app = !getApps.length? initializeApp(firebaseConfig): getApps();

export const auth = getAuth(app);
export const db = getFirestore(app);
