import React from 'react';
import ProductCell from './ProductCell';

const ProductList = ({ title, productList }) => {
  const products = productList.map((p) => (
    <ProductCell name={p.name} points={p.points} />
  ));
  return (
    <div style={{ margin: '15px' }}>
      <h4>{title}</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '15px' }}>
        {products}
      </div>
    </div>
  );
};
export default ProductList;
