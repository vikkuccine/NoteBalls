import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOhinYJHAqXMDNNwVGsplbXKfl0BfEUcQ",
  authDomain: "noteballs-e77f6.firebaseapp.com",
  projectId: "noteballs-e77f6",
  storageBucket: "noteballs-e77f6.appspot.com",
  messagingSenderId: "141171558679",
  appId: "1:141171558679:web:61c430519a1551bccf4f52"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth
}