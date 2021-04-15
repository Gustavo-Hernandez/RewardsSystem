import React, { useContext, useState } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Register = () => {
  const {
    signup,
    state: { error },
  } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        placeholder='email'
        value={email}
        onChange={handleEmailChange}
      ></input>
      <input
        placeholder='password'
        value={password}
        type='password'
        onChange={handlePasswordChange}
      ></input>
      <input
        placeholder='passwordConfirmation'
        value={passwordConfirmation}
        type='password'
        onChange={handlePasswordConfirmationChange}
      ></input>
      <button onClick={() => signup({ email, password, passwordConfirmation })}>
        Create account
      </button>
      {error}
      <Link to='/login'>
        <p>Login instead</p>
      </Link>
    </div>
  );
};
export default Register;
