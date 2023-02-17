import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const app = initializeApp({
    apiKey: "AIzaSyBzUZtM5D_przdWzjNWyXo9H-QTGS4msUE",
    authDomain: "binary-bird.firebaseapp.com",
    databaseURL: "https://binary-bird-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "binary-bird",
    storageBucket: "binary-bird.appspot.com",
    messagingSenderId: "361475655450",
    appId: "1:361475655450:web:4d324948ddc1427c524ea3",
})

export const auth = getAuth(app)
export const db = getDatabase(app)