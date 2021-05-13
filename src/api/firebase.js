import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
  apiKey: "AIzaSyChmzuD-xFg3w6-Ume-xb_5tbcBnVeKxL4",
  authDomain: "labweb-4dde0.firebaseapp.com",
  projectId: "labweb-4dde0",
  storageBucket: "labweb-4dde0.appspot.com",
  messagingSenderId: "542965023973",
  appId: "1:542965023973:web:45f4e1e6e2227bcac9800c",
  measurementId: "G-HHDVBT03C5"
};

class Firebase {
  constructor() {
    if (typeof Firebase.instance === 'object') {
      return Firebase.instance;
    }
    app.initializeApp(config);
    app.analytics();
    this.firestore = app.firestore();
    this.auth = app.auth();
    this.admin = app;
    Firebase.instance = this;
    return this;
  }
}

export const { firestore, auth, storage, admin } = new Firebase();
