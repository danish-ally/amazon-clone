import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBtnLrl55MBchsyLyTQCDluvJb0RmOKbC8",
    authDomain: "clone-fe6c8.firebaseapp.com",
    projectId: "clone-fe6c8",
    storageBucket: "clone-fe6c8.appspot.com",
    messagingSenderId: "379091855773",
    appId: "1:379091855773:web:3c8492913a32835b5ca774",
    measurementId: "G-YW6Q90FKF8"
  });


  const db = firebase.firestore();


  export {db};