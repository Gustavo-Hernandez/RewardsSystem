import React, { useContext, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import { Button, Col, Row } from 'reactstrap';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Context as ProductContext } from '../../context/ProductDataContext';
import { useParams } from 'react-router-dom';

const Product = ({ history }) => {
  const { id } = useParams();

  const {
    queryByID,
    state: { current },
  } = useContext(ProductContext);

  useEffect(() => {
    queryByID(id);
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
            <Col sm={5} md={4}>
              <img
                src={current.img}
                alt={current.name}
                style={{ width: '100%', minWidth: '200px' }}
              ></img>
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
                <h5>Tipo de Producto: {current.type}</h5>
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
        </Col>
      </div>
    </div>
  );
};
export default Product;
