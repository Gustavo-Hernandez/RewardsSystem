import React, { useContext, useState } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import "../../css/stylesheet.css";
import panel from "../../assets/sidePic.jpg"

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
<div className="row">
      <div  className="l-panel col-md-7">
        <h1 id="title">HomeToner</h1>
        <br/>
        <br/>
        <br/>
        <h1 id="subtitle"> 
          Accede a tus <br/>
          recompensas
        </h1>
        <br/>
        <p>Inicia sesión con tu cuenta y registra <br/>
          los puntos de tus compras
        </p>
        <br/><br/>
        <form>
         <div className="mb-3">
            <input type="email" onChange={handleEmailChange} className="form-control" id="InputEmailB1" aria-describedby="emailHelp" placeholder="Ingresa tu e-mail"/>
         </div>
         <div className="mb-3">
            <input type="password" onChange={handlePasswordChange} className="form-control" id="InputPasswordB1" placeholder="Ingresa tu contraseña"/>
         </div>
         <div className="row">
            <div className="col-3">
               <button id="iniciarSesion" onClick={() => signin({ email, password, history })} className="btn btnCuenta">Inicia sesión</button>
            </div>
            <div  className="col-3 iniSesion">
               <p>
                  ó <Link to='/register'>
                   Crea una nueva cuenta
                  </Link>
               </p>
            </div>
         </div>
         <div>
            <br/>
            <p><Link to="/ForgotPassword">Olvidé mi contraseña</Link></p>
         </div>
      </form>

      <div>
        {error}
      </div>
        
      </div>
      <div className="r-panel col-md-5">
        <img src={panel}/>
      </div>
    </div>
  );
};
export default Login;
