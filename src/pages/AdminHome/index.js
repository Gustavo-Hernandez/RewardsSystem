import React, {useContext, useEffect} from 'react';
import NavigationBar from '../../components/NavigationBar';
import ProductList from '../../components/ProductList';
import {Context as ProductContext} from "../../context/ProductDataContext";

const AdminHome = () => {
  const {
    query,
    state: { products },
  } = useContext(ProductContext);

  useEffect(() => {
    query();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <NavigationBar />
      <ProductList title='Todos los productos' productList={products} />
    </div>
  );
};
export default AdminHome;
