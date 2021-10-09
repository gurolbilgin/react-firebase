import firebase from "firebase";
import { useEffect, useState } from "react";

// CONFIGURATION

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_PROJECT_ID}-default-rtdb.firebaseio.com`,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_MESSAGESENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);
export default firebase;

// FETCH BLOGS

export const useFetch = () => {
  const [blogList, setBlogList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const blogRef = firebase.database().ref("Blogs");
    blogRef.on("value", (snapshot) => {
      const blogs = snapshot.val();

      const blogArray = [];
      for (let id in blogs) {
        blogArray.push({ id, ...blogs[id] });
      }

      setBlogList(blogArray);
      setLoading(false);
    });
  }, []);
  return { blogList, loading };
};

// CREATE A NEW USER

export const newUser = async (email, password, username) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        console.log("newUserErrorMessage", errorMessage);
        // ..
      });

    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ username });
  } catch (error) {
    alert(
      "There is an existing account with this email address. please continue with your email or sign in with Google!"
    );
  }
};

// SIGNOUT

export const signOut = () => {
  firebase.auth().signOut();
};

// SIGNIN

export const signIn = async (email, password) => {
  // console.log(email, password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      // var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      alert("The password is invalid or the user does not have a password!");
    });
};

// USER OBSERVER

export const userObserver = async (setCurrentUser) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
  });
};

// GOOGLE AUTH

export const signUpProviderGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  firebase.auth().signInWithPopup(provider);
};

// FORGOT PASSWORD

export const forgotPassword = (email) => {
  firebase.auth().sendPasswordResetEmail(email);

  alert("Please check your mail box!");
};

// ADD BLOG

export const addBlog = (info) => {
  const blogRef = firebase.database().ref("Blogs");

  blogRef.push(info);
  // we need a success notofocation here
};

//  UPDATE BLOG
export const updateInfo = (info) => {
  const contactRef = firebase.database().ref("Blogs").child(info.id);
  contactRef.update(info);
  //  succesNotify("Updated Successfully!");
};
