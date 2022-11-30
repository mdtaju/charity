// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAkbymp5iyJD-4_GKPp8Ygj0RSguqLFJcM",
      authDomain: "charity-aft.firebaseapp.com",
      projectId: "charity-aft",
      storageBucket: "charity-aft.appspot.com",
      messagingSenderId: "123332735023",
      appId: "1:123332735023:web:156bf1329ee60c757716da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;