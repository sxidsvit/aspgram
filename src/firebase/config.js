import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB1YquE6sZxiY5gWL94OLLxEDd22sXRAfQ",
  authDomain: "asp-ads.firebaseapp.com",
  databaseURL: "https://asp-ads.firebaseio.com",
  projectId: "asp-ads",
  storageBucket: "asp-ads.appspot.com",
  messagingSenderId: "252025369069",
  appId: "1:252025369069:web:a429d34a1d659b75f577e4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage(); // To upload a file to Cloud Storage,
const projectFirestore = firebase.firestore(); //Initialize an instance of Cloud Firestore
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
//  metod for a server-generated timestamp in the written data

export { projectStorage, projectFirestore, timestamp };