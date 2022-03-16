import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {

  //bd completa
    apiKey: "AIzaSyCbY1IoFB1cBPmTGQ2blZGBk9b1LEor3Bc",
    authDomain: "coderhouse-ecommerce-2d923.firebaseapp.com",
    projectId: "coderhouse-ecommerce-2d923",
    storageBucket: "coderhouse-ecommerce-2d923.appspot.com",
    messagingSenderId: "698380749502",
    appId: "1:698380749502:web:726e704d869d5b5fcfecef"

  };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);