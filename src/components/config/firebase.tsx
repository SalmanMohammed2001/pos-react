// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB29KhcKNFAJCYsaRK2_LZG4yGmR8j-9Pg",
    authDomain: "react-pos-8de16.firebaseapp.com",
    projectId: "react-pos-8de16",
    storageBucket: "react-pos-8de16.appspot.com",
    messagingSenderId: "764714218295",
    appId: "1:764714218295:web:1f4ac8a3b7d2de0195e0b2",
    measurementId: "G-GY1ZKN5DH4"
};

const app=initializeApp(firebaseConfig)
 const storage = getStorage(app);
export {storage}