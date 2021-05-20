import React, { useContext } from 'react';
import { Navbar, Nav, NavItem, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCamera } from '@fortawesome/free-solid-svg-icons';
import useAuthentication from '../../hooks/useAuthentication';
import { Context as AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const isAdmin = useAuthentication()[2];
  const { signout } = useContext(AuthContext);
  return (
    <Navbar
      style={{
        color: 'white',
        backgroundColor: isAdmin ? '#DD1717' : '#477DCF',
      }}
    >
      <h4
        style={{
          marginLeft: '25px',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        HomeToner
      </h4>
      <Nav className='mr-auto'>
        <NavItem
          style={{ display: 'flex', alignItems: 'center', marginRight: '25px' }}
        >
          {isAdmin ? (
            <FontAwesomeIcon size='lg' icon={faCamera} />
          ) : (
            <Link
              to='/profile'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <FontAwesomeIcon size='lg' icon={faUser} />
            </Link>
          )}
        </NavItem>
        <NavItem style={{ marginRight: '15px' }}>
          <Button onClick={signout} className='btn btn-danger'>
            Cerrar Sesión
          </Button>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
export default NavigationBar;
