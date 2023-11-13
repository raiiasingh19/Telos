// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyBLGruCJn45emd6C0Hktcls4OY5WMaEaJo",
  authDomain: "telos-400412.firebaseapp.com",
  projectId: "telos-400412",
  storageBucket: "telos-400412.appspot.com",
  messagingSenderId: "700787076231",
  appId: "1:700787076231:web:b130885d63d9b950a61c22",
  measurementId: "G-5B1BP5CVJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

// Function to reauthenticate the user with Google
export const reauthenticateWithGoogle = () => {
  const user = auth.currentUser;

  if (!user) {
    console.error("User is not authenticated.");
    return;
  }

  user
    .reauthenticateWithPopup(provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      const accessToken = result.user.accessToken;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      localStorage.setItem("accessToken", accessToken);

      console.log("Reauthentication with Google successful");
    })
    .catch((error) => {
      console.error("Reauthentication with Google failed", error);
    });
};


export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;
    const accessToken = result.user.accessToken;

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("profilePic", profilePic)
    localStorage.setItem("accessToken", accessToken);

    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
};