import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig as config } from "./firebase.config";
//initialize app with firebase config
firebase.initializeApp(config);
// Define auth and firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();
firebase.auth().useDeviceLanguage();

//Create an instance of the Google provider object
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

//Create an instance of the facebook provider object
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({
  display: "popup",
});
// Create User object in Firebase
export const createUserProfileOnFirebase = async (userAuth, ...otherProps) => {
  if (!userAuth) return;
  const { email, displayName, uid } = userAuth;
  const userRef = firestore.doc(`users/${uid}`);
  const userSnapshot = await userRef.get();
  if (!userSnapshot.exists) {
    const createdAt = new Date();
    try {
      await userRef.set({
        email,
        displayName,
        createdAt,
        ...otherProps,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};
//get current user
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      unSubscribe();
      resolve(userAuth);
    }, reject);
  });
};
// Forgot password reset
export const passwordReset = (emailAddress, setResponse) => {
  const message =
    "We have sent instructions to your email account. Now you can follow the link to reset your password.";
  auth
    .sendPasswordResetEmail(emailAddress, setResponse)
    .then(function () {
      setResponse(message);
    })
    .catch(function (error) {
      setResponse(error.message);
    });
};

export default firebase;
