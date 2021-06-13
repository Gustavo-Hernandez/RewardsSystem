import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Context as ProductContext } from '../../context/ProductDataContext';
import PuffLoader from 'react-spinners/PuffLoader';

const ProductCell = ({ uid, name, points, img, type }) => {
  const { setCurrentProduct } = useContext(ProductContext);

  const [loaded, setLoaded] = useState(false);
  const link = '/product/' + uid;

  return (
    <Link
      to={link}
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
        <CardImg
          top
          src={img}
          onLoad={() => {
            setLoaded(true);
          }}
        />
        {!loaded && (
          <PuffLoader css={'margin: 0 auto;'} color={'#eccc68'} size={80} />
        )}
        <CardBody>
          <CardTitle tag='p'>
            {name.length < 17 ? name : name.substr(0, 16) + '...'}
          </CardTitle>
        </CardBody>
      </Card>
    </Link>
  );
};
export default ProductCell;
