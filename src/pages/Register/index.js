import React, { useContext, useState } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import "../../css/stylesheet.css";
import panel from "../../assets/sidePic.jpg"

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
    <div className="row">
      <div id="init" className="l-panel col-md-7 init">
            <h1 id="title">HomeToner</h1>
            <br/>
            <h1 id="subtitle"> 
               Registra tus <br/>
               puntos y obtén<br/>
               recompensas.
            </h1>
            <br/>
            <p>Entra y ten acceso a todos los<br/>
               descuentos y promociones que <br/>
               tenemos para tí.
            </p>
            <form>
               <div className="mb-3">
                  <input type="email" onChange={handleEmailChange} className="form-control" id="InputEmailA1" aria-describedby="emailHelp" placeholder="Ingresa tu e-mail"/>
               </div>
               <div className="mb-3">
                  <input type="password" onChange={handlePasswordChange} className="form-control" id="InputPasswordA1" placeholder="Ingresa tu contraseña"/>
               </div>
               <div className="mb-3">
                  <input type="password" onChange={handlePasswordConfirmationChange} className="form-control" id="InputPasswordA2" placeholder="Confirma tu contraseña"/>
               </div>
               <div className="row">

                  <div className="col-lg-3 col-md-6">
                     <button id="crearCuentaInit" onClick={signup} className="btn btnCuenta">Crear cuenta</button>
                  </div>
                  <div className="col-lg-3 col-md-6 iniSesion">
                     <p>ó <Link to='/login'>
                        Inicia Sesión
                        </Link>
                     </p>
                  </div>
               </div>
               <div style={{color:"#FF0000"}}>
                 {error}
               </div>
            </form>
         </div>
         <div className="r-panel col-md-5 d-lg-block d-md-none d-sm-none">
            <img src={panel}/>
         </div>
         
    </div>
  );
};
export default Register;
