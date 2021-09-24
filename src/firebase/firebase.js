// import firebase from "firebase/app";
// import "firebase/database";
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ6Ky7WA_7xk7aJ_qU_2yRzV9XioHe1Kk",
  authDomain: "react-blog-app-73a95.firebaseapp.com",
  databaseURL: "https://react-blog-app-73a95-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-73a95",
  storageBucket: "react-blog-app-73a95.appspot.com",
  messagingSenderId: "550706970362",
  appId: "1:550706970362:web:ef43866236fe800e88d343",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
