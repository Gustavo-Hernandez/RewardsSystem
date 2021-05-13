import React, { useContext } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';

const Verification = () => {
  const {
    signout,
    sendConfirmationEmail,
    state: { email, confirmationMessage },
  } = useContext(AuthContext);

  return (
    <div class="row">
      <div id="init" class="l-panel col-md-7 init">
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
               <div class="mb-3">
                  <input type="email" class="form-control" id="InputEmailA1" aria-describedby="emailHelp" placeholder="Ingresa tu e-mail"/>
               </div>
               <div class="mb-3">
                  <input type="password" class="form-control" id="InputPasswordA1" placeholder="Ingresa tu contraseña"/>
               </div>
               <div class="mb-3">
                  <input type="password" class="form-control" id="InputPasswordA2" placeholder="Confirma tu contraseña"/>
               </div>
               <div class="row">
                  <div class="col-3">
                     <button id="crearCuentaInit" type="submit" class="btn btnCuenta">Crear cuenta</button>
                  </div>
                  <div class="col-3 iniSesion">
                     <p>ó <a href="#" id="changeToLogIn1">Inicia Sesión</a></p>
                  </div>
               </div>
            </form>
         </div>

         
         
    </div>
  );
};
export default Verification;
