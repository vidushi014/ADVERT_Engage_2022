// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc0NS_QcyBdi7I4pEowbPsvp63V9fqNm0",
  authDomain: "vidushi-304c0.firebaseapp.com",
  projectId: "vidushi-304c0",
  storageBucket: "vidushi-304c0.appspot.com",
  messagingSenderId: "374262354592",
  appId: "1:374262354592:web:5f7386fb1ee1e031746fc5",
  measurementId: "G-2WJ5V5PML3",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
