import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { Context as UserContext } from '../../context/UserDataContext';

const Home = () => {
  const { signout } = useContext(AuthContext);
  const {
      query,
      state: { error, email, points },
  } = useContext(UserContext);
  useEffect(() =>{
      query();
  }, []);
  return (
    <div>
      <h1>Home</h1>
        <h3>Puntos: { points }</h3>
        {error}
      <button onClick={signout}>Logout</button>
    </div>
  );
};
export default Home;
