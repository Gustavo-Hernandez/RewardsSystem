import React, { useContext, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import ProductList from '../../components/ProductList';
import { Context as ProductContext } from '../../context/ProductDataContext';
import { Context as UserContext } from '../../context/UserDataContext';

const Home = () => {
  const {
    query,
    state: { products },
  } = useContext(ProductContext);

  const {
    state: { points },
  } = useContext(UserContext);

  useEffect(() => {
    query();
    // eslint-disable-next-line
  }, []);
  const productsSorted = products.sort((a, b) => a.points - b.points);
  const availableProducts = products.filter((p) => p.points < points);

  return (
    <div>
      <NavigationBar />

      <ProductList
        title='Productos Disponibles'
        productList={availableProducts}
      />
      <ProductList title='Todos los productos' productList={productsSorted} />
    </div>
  );
};
export default Home;
