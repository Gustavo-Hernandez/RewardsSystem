import React, { useContext } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';

const Home = () => {
  const { signout } = useContext(AuthContext);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={signout}>Logout</button>
    </div>
  );
};
export default Home;
