import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
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
