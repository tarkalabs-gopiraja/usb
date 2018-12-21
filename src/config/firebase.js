import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDhhgnmsXeWok_9pp-VbAMPc3liZLIEW_s",
  authDomain: "user-story-builder.firebaseapp.com",
  databaseURL: "https://user-story-builder.firebaseio.com",
  projectId: "user-story-builder",
  storageBucket: "user-story-builder.appspot.com",
  messagingSenderId: "896851530818"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const storageRef = firebase.storage().ref();
