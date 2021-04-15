import React, { useContext, useState } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const PasswordForgot = ({ history }) => {
  const [email, setEmail] = useState('');
  const {
    sendRecoveryEmail,
    state: { confirmationMessage, error },
  } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h1>PasswordForgot</h1>
      <input
        placeholder='email'
        value={email}
        onChange={handleEmailChange}
      ></input>
      <button onClick={() => sendRecoveryEmail({ email })}>
        Send Recovery Email
      </button>
      <Link to='/login'>
        <p>Go back</p>
      </Link>
      {confirmationMessage}
      {error}
    </div>
  );
};
export default PasswordForgot;
