import firebase from "firebase/app"
import 'firebase/firestore'  
  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARi7qP8zKZna6NojKH1kkToGh2sdR5KEM",
    authDomain: "fir-react-1a68c.firebaseapp.com",
    databaseURL: "https://fir-react-1a68c.firebaseio.com",
    projectId: "fir-react-1a68c",
    storageBucket: "fir-react-1a68c.appspot.com",
    messagingSenderId: "890430221221",
    appId: "1:890430221221:web:205073916bebcaaa22d64c"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
window.firebase = firebase;

export default firebase;