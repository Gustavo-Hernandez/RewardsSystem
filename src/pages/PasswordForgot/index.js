import React, { useContext, useState } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import '../../css/stylesheet.css';
import panel from '../../assets/sidePic.jpg';

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
    <div className='row ' style={{ backgroundColor: 'white' }}>
      <div className='l-panel col-md-7'>
        <h1 id='title'>HomeToner</h1>
        <br />
        <br />
        <br />
        <h1 id='subtitle'>
          Recupera tu <br />
          cuenta
        </h1>
        <br />
        <p>
          Ingresa tu correo electrónico con el que registraste tu cuenta, <br />
          Enviarémos un correo de recuperación
        </p>

        <form>
          <div className='mb-3'>
            <input
              type='email'
              className='form-control'
              value={email}
              onChange={handleEmailChange}
              id='InputEmailC1'
              aria-describedby='emailHelp'
              placeholder='Ingresa tu e-mail'
            />
          </div>
          <br />
          <div className='row'>
            <div className='col-3'>
              <button
                id='iniciarSesion'
                onClick={() => sendRecoveryEmail({ email })}
                className='btn btnCuenta'
              >
                Enviar correo
              </button>
            </div>
            <div className='col-3 iniSesion'>
              <p>
                ó <Link to='/login'> Volver a Inicio</Link>
              </p>
              {confirmationMessage}
              {error}
            </div>
          </div>
        </form>
      </div>

      <div className='r-panel col-md-5'>
        <img src={panel} alt='password forgot' />
      </div>
    </div>
  );
};
export default PasswordForgot;
