import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCssSXgrS9SrwOHLGGapfK9iKFXqEvQTP0",
  authDomain: "todolist-auth-email.firebaseapp.com",
  databaseURL:
    "https://todolist-auth-email-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todolist-auth-email",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
