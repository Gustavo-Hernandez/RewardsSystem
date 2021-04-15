import React, { useContext } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';

const Verification = () => {
  const {
    signout,
    sendConfirmationEmail,
    state: { email, confirmationMessage },
  } = useContext(AuthContext);

  return (
    <div>
      <h1>Verification</h1>
      <p>Send confirmation email to: {email}</p>
      <button onClick={sendConfirmationEmail}>Send</button>
      <button onClick={signout}>Use other account</button>
      {confirmationMessage}
    </div>
  );
};
export default Verification;
