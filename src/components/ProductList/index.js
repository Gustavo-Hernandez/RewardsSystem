import React from 'react';
import ProductCell from './ProductCell';

const ProductList = ({ title, productList }) => {
  const products = productList.map((p) => (
    <ProductCell
      key={p.uid + Math.random()}
      uid={p.uid}
      name={p.name}
      points={p.points}
      img={p.img}
      type={p.type}
    />
  ));
  return (
    <div
      style={{
        margin: '15px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '15px',
      }}
    >
      <h5
        style={{
          fontFamily: 'Poppins',
          borderLeft: '4px solid orange',
          paddingLeft: '5px',
        }}
      >
        {title}
      </h5>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '15px',
          backgroundColor: '#f1f2f6',
          padding: '5px',
        }}
      >
        {products}
      </div>
    </div>
  );
};
export default ProductList;
