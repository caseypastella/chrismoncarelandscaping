import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVIbNntZD6-01FxfV6Je12q1U5JxQ1JQM",
    authDomain: "chrismoncarelandscape.firebaseapp.com",
    databaseURL: "https://chrismoncarelandscape.firebaseio.com",
    projectId: "chrismoncarelandscape",
    storageBucket: "chrismoncarelandscape.appspot.com",
    messagingSenderId: "143360289226",
    appId: "1:143360289226:web:b04f7bf499b36dac194733",
    measurementId: "G-097JDYNJ1C"
  };
 
  class Firebases {
      constructor() {
          app.initializeApp(firebaseConfig);
          this.auth = app.auth();
          this.db = app.database();
      }
       
      doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
      
      doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email,password);
    
      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

      doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
      user = uid => this.db.ref(`users/${uid}`);
      users = () => this.db.ref('users');
  }
  export const getAuth = () => {
    return firebase.auth();
  };
  export const facebookOAuth = () => {
    return new firebase.firebase_.auth.FacebookAuthProvider();
  };

  export const googleOAuth = () => {
    return new firebase.firebase_.auth.GoogleAuthProvider();
  };
  export default Firebases; 