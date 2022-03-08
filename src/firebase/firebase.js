import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbY1IoFB1cBPmTGQ2blZGBk9b1LEor3Bc",
    authDomain: "coderhouse-ecommerce-2d923.firebaseapp.com",
    projectId: "coderhouse-ecommerce-2d923",
    storageBucket: "coderhouse-ecommerce-2d923.appspot.com",
    messagingSenderId: "698380749502",
    appId: "1:698380749502:web:726e704d869d5b5fcfecef"
  };

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return firebase.firestore(app);
}
