import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { Context as ProductContext } from '../../context/ProductDataContext';

const ProductCell = ({ name, points, img, type }) => {
  const {
    setCurrentProduct
  } = useContext(ProductContext);

  return (
    <Link to='/product' style={{ textDecoration: 'none', color: 'inherit' }}
          onClick={() => setCurrentProduct({ name, points, img, type })}>
      <Card style={{ width: '180px', marginRight: '8px' }}>
        <CardImg top src={img} />
        <CardBody>
          <CardTitle style={{ textOverflow: 'ellipsis' }} tag='h5'>
            {name}
          </CardTitle>
          <CardText>Puntos: {points}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};
export default ProductCell;
