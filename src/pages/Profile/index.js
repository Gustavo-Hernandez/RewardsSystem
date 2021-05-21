import React, { useContext, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { Button, Col, Row } from 'reactstrap';
import NavigationBar from '../../components/NavigationBar';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Context as AuthContext } from '../../context/AuthContext';
import { Context as UserContext } from '../../context/UserDataContext';

const Profile = ({ history }) => {
  const {
    signout,
    state: { email },
  } = useContext(AuthContext);

  const {
    query,
    state: { points },
  } = useContext(UserContext);

  useEffect(() => {
    query();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <NavigationBar />
      <button
        onClick={history.goBack}
        style={{
          marginLeft: '50px',
          marginTop: '20px',
          display: 'flex',
          alignItems: 'center',
          color: 'inherit',
          textDecoration: 'none',
          background: 'none',
          border: 'none',
        }}
      >
        <FontAwesomeIcon size='3x' icon={faChevronLeft} />
        <h3 style={{ marginLeft: '15px' }}>Volver</h3>
      </button>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Col sm={12} md={10} lg={8}>
          <Row
            className='mt-5'
            style={{
              backgroundColor: 'white',
              padding: '20px',
              margin: '20px',
              borderRadius: '20px',
            }}
          >
            <Col
              sm={12}
              md={5}
              lg={4}
              style={{
                display: 'flex',
                marginLeft: '20px',
                justifyContent: 'center',
                overflow: 'visible',
                maxWidth: '300px',
              }}
            >
              <div
                style={{
                  border: '12px solid #1F53A1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '280px',
                  height: '280px',
                }}
              >
                <QRCode size={170} value={email} />
              </div>
            </Col>
            <Col
              sm={12}
              md={6}
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '25px',
                marginLeft: '25px',
              }}
            >
              <Row>
                <h4>Correo: {email}</h4>
                <h4>Mis Puntos: {points}</h4>
              </Row>
              <Row>
                <h4>Última Visita Registrada: {'2/12/2020'}</h4>
              </Row>
              <Row>
                <Button
                  onClick={signout}
                  style={{
                    width: '150px',
                    marginLeft: '12px',
                    marginTop: '20px',
                  }}
                  className='btn btn-danger'
                >
                  Cerrar Sesión
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
};
export default Profile;
