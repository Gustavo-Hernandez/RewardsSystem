import React, { useContext, useState } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = ({ history }) => {
  const {
    signin,
    state: { error },
  } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder='email'
        value={email}
        onChange={handleEmailChange}
      ></input>
      <input
        placeholder='password'
        type='password'
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <button onClick={() => signin({ email, password, history })}>
        Sign In
      </button>
      {error}
      <Link to='/register'>
        <p>Register instead</p>
      </Link>
      <Link to='/password-forgot'>
        <p>Reset Password</p>
      </Link>
    </div>
  );
};
export default Login;
