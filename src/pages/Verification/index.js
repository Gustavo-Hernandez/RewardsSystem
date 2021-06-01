import React, { useContext } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import "../../css/stylesheet.css";
import panel from "../../assets/sidePic.jpg"

const Verification = () => {
  const {
    signout,
    sendConfirmationEmail,
    state: { email, confirmationMessage },
  } = useContext(AuthContext);

  return (
    <div className="row">  
      <div className="l-panel col-lg-12 col-md-7 ">
            <h1 id="title">HomeToner</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 id="subtitle"> 
               Valida tu correo
            </h1>
            <br/>
            <p>Se envió un correo de confirmación a <strong><b>{email}</b></strong>
            <br/>
            Revisa tu bandeja de entrada y confirma tu cuenta para continuar</p>
            <br/>
            <form style="margin-left: 20px">
               <button id="sendAgain" onClick={sendConfirmationEmail} className="btn btnCuenta">Enviar correo de nuevo</button>  
               <br/><br/>            
               <button style="margin-left: 15px;" onClick={signout}>Inicia sesión con otra cuenta</button>
            </form>
            {confirmationMessage}
      </div>

      <div className="r-panel col-md-5 d-lg-block d-md-none d-sm-none">
            <img alt="panel" src={panel}/>
         </div>
         
    </div>
  );
};
export default Verification;
