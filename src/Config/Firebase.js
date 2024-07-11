// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider, FacebookAuthProvider,  GithubAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDrspRxqkxvCl98XcUts1tYom2FI7Zyyu8",
  authDomain: "mirza-bank.firebaseapp.com",
  projectId: "mirza-bank",
  storageBucket: "mirza-bank.appspot.com",
  messagingSenderId: "305762007545",
  appId: "1:305762007545:web:76fdfb8fba53fb5b422528",
  measurementId: "G-7PG0VS1N14"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
export {auth, analytics,firestore,provider,facebookProvider,githubProvider};
