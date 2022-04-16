import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz2DrmERW9N6cR8qNmHsoppgJL-Mh0dvY",
  authDomain: "sebasstore-6ffac.firebaseapp.com",
  projectId: "sebasstore-6ffac",
  storageBucket: "sebasstore-6ffac.appspot.com",
  messagingSenderId: "222465731765",
  appId: "1:222465731765:web:3717ef07385a471b9aa2fc",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
