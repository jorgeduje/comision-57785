import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz-swngSg8fGP3i29g3MF9cnmVB8wL9u4",
  authDomain: "comision-57785.firebaseapp.com",
  projectId: "comision-57785",
  storageBucket: "comision-57785.appspot.com",
  messagingSenderId: "696723992900",
  appId: "1:696723992900:web:692736fdc261f13d16a711",
};

const app = initializeApp(firebaseConfig);
// obtener una base de datos ---> app
export const db = getFirestore(app);
// obtener la authenticacion ---> app
