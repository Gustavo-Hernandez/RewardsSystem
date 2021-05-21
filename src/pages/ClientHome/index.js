import React, { useContext, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import ProductList from '../../components/ProductList';
import { Context as ProductContext } from '../../context/ProductDataContext';

const Home = () => {
  const {
    query,
    state: { products },
  } = useContext(ProductContext);

  useEffect(() => {
    query();
    // eslint-disable-next-line
  }, []);

  const tempProducts = products;

  return (
    <div>
      <NavigationBar />
      <ProductList title='Productos Disponibles' productList={tempProducts} />
      <ProductList title='Todos los productos' productList={tempProducts} />
    </div>
  );
};
export default Home;
