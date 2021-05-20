import React, {useContext} from 'react';
import NavigationBar from '../../components/NavigationBar';
import { Button, Card, CardImg, Col, Row } from 'reactstrap';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Context as ProductContext} from "../../context/ProductDataContext";

const Product = ({ history }) => {
    const {
        state: { current }
    } = useContext(ProductContext);

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
              <CardImg src={current.img}/>
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
            <h3>{current.name}</h3>
          </Row>
            <Row>
                <h5>Tipo de Porducto: {current.type}</h5>
            </Row>
          <Row>
            <h5>Puntos: {current.points}</h5>
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
