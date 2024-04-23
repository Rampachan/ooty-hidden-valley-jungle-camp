// firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCKsDqI9kbk_w4JGplRwJuIgh8eXD8UGnI",
    authDomain: "resort-ef321.firebaseapp.com",
    projectId: "resort-ef321",
    storageBucket: "resort-ef321.appspot.com",
    messagingSenderId: "35167968407",
    appId: "1:35167968407:web:bf8d87f80d9d2818c25dd2",
    measurementId: "G-0H4RP8TMCT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
