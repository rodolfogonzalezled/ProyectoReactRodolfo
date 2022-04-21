import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLmvs2B90_fuMAwWY7Oy2huImdUEk2dH8",
    authDomain: "backend-app-react.firebaseapp.com",
    projectId: "backend-app-react",
    storageBucket: "backend-app-react.appspot.com",
    messagingSenderId: "452424084137",
    appId: "1:452424084137:web:fe65ce394590d175c697b8"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)