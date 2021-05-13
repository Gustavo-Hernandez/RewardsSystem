import React, { useContext } from 'react';
import QRCode from 'react-qr-code';
import { Context as AuthContext } from '../../context/AuthContext';

const Home = () => {
  const {
    signout,
    state: { email },
  } = useContext(AuthContext);
  return (
    <div>
      <h1>Home</h1>
      {console.log(email)}
      <QRCode value={email} />
      <button onClick={signout}>Logout</button>
    </div>
  );
};
export default Home;
