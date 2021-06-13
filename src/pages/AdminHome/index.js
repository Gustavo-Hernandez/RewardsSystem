import React, { useContext, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import ProductList from '../../components/ProductList';
import { Context as ProductContext } from '../../context/ProductDataContext';

const AdminHome = () => {
  const {
    query,
    state: { products },
  } = useContext(ProductContext);

  useEffect(() => {
    query();
    // eslint-disable-next-line
  }, []);

  const productsSorted = products.sort((a, b) => a.points - b.points);
  return (
    <div>
      <NavigationBar />
      <ProductList title='Todos los productos' productList={productsSorted} />
    </div>
  );
};
export default AdminHome;
