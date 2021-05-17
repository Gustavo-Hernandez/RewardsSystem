import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import { Button, Card, CardImg, Col, Row } from 'reactstrap';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = ({ history }) => {
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
      <Row
        className='mt-5'
        style={{ marginLeft: '35px', width: '80%', marginBottom: '40px' }}
      >
        <Col sm={4} md={3} style={{ display: 'flex' }}>
          <Card style={{ width: '100%' }}>
            <CardImg src='data:image/jpeg;base64,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' />
          </Card>
        </Col>
        <Col
          sm={6}
          md={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            marginTop: '25px',
            marginLeft: '25px',
          }}
        >
          <Row>
            <h3>Product Name</h3>
          </Row>
          <Row>
            <h5>Puntos: {2}</h5>
          </Row>
          <Row>
            <Button
              style={{
                width: '200px',
                marginLeft: '12px',
                marginTop: '20px',
                fontWeight: 'bold',
                backgroundColor: '#0F4392',
              }}
              className='btn'
            >
              Canjear Producto
            </Button>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Product;
