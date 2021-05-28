import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Context as ProductContext } from '../../context/ProductDataContext';

const ProductCell = ({ name, points, img, type }) => {
  const { setCurrentProduct } = useContext(ProductContext);

  return (
    <Link
      to='/product'
      style={{ textDecoration: 'none', color: 'inherit' }}
      onClick={() => setCurrentProduct({ name, points, img, type })}
    >
      <Card
        style={{
          width: '180px',
          marginRight: '8px',
          border: '1px solid #eccc68',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '30px',
            height: '30px',
            zIndex: 2,
            backgroundColor: '#eccc68',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '00px 0px 0px 10px',
            right: '0',
          }}
        >
          {points}
        </div>
        <CardImg top src={img} />
        <CardBody>
          <CardTitle style={{ textOverflow: 'ellipsis' }} tag='h5'>
            {name}
          </CardTitle>
        </CardBody>
      </Card>
    </Link>
  );
};
export default ProductCell;
