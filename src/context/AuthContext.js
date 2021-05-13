import React from 'react';
import createDataContext from './createDataContext';
import { auth, firestore } from '../api/firebase';

const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

const authReducer = (state, action) => {
  switch (action.type) {
    case 'set_error':
      return { ...state, error: action.payload, confirmationMessage: '' };
    case 'clear_error_message':
      return { ...state, error: '' };
    case 'confirm_email_sent':
      return { ...state, confirmationMessage: action.payload, error: '' };
    case 'set_local_email':
      return { ...state, error: '', email: action.payload };
    default:
      return state;
  }
};

const signin = (dispatch) => async ({ email, password, history }) => {
  if (email && password) {
    try {
      let { user } = await auth.signInWithEmailAndPassword(email, password);
      history.push('/dashboard');
      dispatch({ type: 'set_local_email', payload: user.email });
    } catch (error) {
      let errorMessage = '';
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid Email';
          break;
        case 'auth/user-disabled':
          errorMessage = 'User is disabled.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'This email is not registered';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Wrong password';
          break;
        default:
          errorMessage = 'There was an error while attempting to sign in.';
          break;
      }
      const errorComponent = <p>{errorMessage}</p>;
      dispatch({ type: 'set_error', payload: errorComponent });
    }
  } else {
    const errorComponent = <p>Missing Values.</p>;
    dispatch({ type: 'set_error', payload: errorComponent });
  }
};

const signup = (dispatch) => async ({
  email,
  password,
  passwordConfirmation,
}) => {
  let tempError = '';

  if (email && password && passwordConfirmation) {
    if (!emailRegEx.test(email)) {
      tempError += 'Invalid email.\n';
    }
    if (!/\d/.test(password)) {
      tempError += 'Password must include a number.\n';
    }
    if (!/[a-z]/.test(password)) {
      tempError += 'Password must include a lower case letter.\n';
    }
    if (!/[A-Z]/.test(password)) {
      tempError += 'Password must include an uppercase letter.\n';
    }
    if (password.length < 8) {
      tempError += 'Password must contain 8 characters at least.\n';
    }
    if (!specialCharRegex.test(password)) {
      tempError += 'Password must include an special character.\n';
    }
    if (password !== passwordConfirmation) {
      tempError += 'Passwords are different.';
    }
  } else {
    tempError = 'Missing values.';
  }

  if (tempError.length > 0) {
    if (tempError.charAt(tempError.length - 1) === '\n') {
      tempError = tempError.substring(0, tempError.length - 1);
    }

    const errorComponent = tempError
      .split('\n')
      .map((e, index) => <p key={index}>{e}</p>);

    dispatch({ type: 'set_error', payload: errorComponent });
  } else {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await firestore.collection("Client").doc(user.uid).set({
        email: email,
        points: 0
      });
      await user.sendEmailVerification();
    } catch (err) {
      let errorComponent;

      switch (err.code) {
        case 'auth/email-already-in-use':
          errorComponent = <p>This email already has an account </p>;
          break;
        case 'auth/invalid-email':
          errorComponent = <p>Invalid email </p>;
          break;
        case 'auth/operation-not-allowed':
          errorComponent = <p>Email/password accounts are not enabled.</p>;
          break;
        case 'auth/weak-password':
          errorComponent = <p>Password is not strong</p>;
          break;
        default:
          errorComponent = <p>An error ocurred. </p>;
          break;
      }

      dispatch({ type: 'set_error', payload: errorComponent });
    }
  }
};

const sendConfirmationEmail = (dispatch) => async () => {
  const user = auth.currentUser;
  if (user) {
    try {
      await user.sendEmailVerification();
      dispatch({ type: 'confirm_email_sent', payload: 'Email has been sent.' });
    } catch (error) {
      dispatch({
        type: 'set_error',
        payload: 'Email could not be sent. Try again later.',
      });
    }
  } else {
    dispatch({ type: 'set_error', payload: 'User is not logged in' });
  }
};

const sendRecoveryEmail = (dispatch) => async ({ email }) => {
  if (email && email.length > 0) {
    if (emailRegEx.test(email)) {
      try {
        await auth.sendPasswordResetEmail(email);
        dispatch({
          type: 'confirm_email_sent',
          payload: 'Email has been sent.',
        });
      } catch (error) {
        let errorMessage = '';
        switch (error.code) {
          case 'auth/invalid-email':
            errorMessage = 'This email is not valid.';
            break;
          case 'auth/user-not-found':
            errorMessage = 'This email is not registered.';
            break;
          default:
            errorMessage = 'Email could not be sent.';
            break;
        }
        const errorComponent = <p>{errorMessage}</p>;
        dispatch({ type: 'set_error', payload: errorComponent });
      }
    } else {
      const errorComponent = <p>Invalid email.</p>;
      dispatch({ type: 'set_error', payload: errorComponent });
    }
  } else {
    const errorComponent = <p>Missing email.</p>;
    dispatch({ type: 'set_error', payload: errorComponent });
  }
};

const signout = (dispatch) => async () => {
  auth.signOut();
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signout, signup, signin, sendConfirmationEmail, sendRecoveryEmail },
  { error: '', confirmationMessage: '', email: '' }
);
