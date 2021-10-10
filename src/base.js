import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBCIahOX8-Hpkv6V9P4dlpTzynk2HFeDjM",
  authDomain: "burgers-2bd49.firebaseapp.com",
  databaseURL:
    "https://burgers-2bd49-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "burgers-2bd49",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
