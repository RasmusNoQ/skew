import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbr-Xv46b6nViROfSbVFk2tWFKeNU9UBg",
    authDomain: "twitter-clone-6eee2.firebaseapp.com",
    projectId: "twitter-clone-6eee2",
    storageBucket: "twitter-clone-6eee2.appspot.com",
    messagingSenderId: "724842618766",
    appId: "1:724842618766:web:2616281fa43276e1e5cedf"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };