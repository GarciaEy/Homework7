import * as $ from "jquery";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);

export function signUserUp(fn, ln, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("User Created");
    })
    .catch((error) => {
      console.log(error);
    });
}

export function signUserIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("User signed In");
    })
    .catch((error) => {
      console.log(error);
    });
}
