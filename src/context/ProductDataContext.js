import React from 'react';
import { firestore } from '../api/firebase';
import createDataContext from './createDataContext';

const productDataReducer = (state, action) => {
  switch (action.type) {
    case 'set_products':
      return { ...state, products: action.payload };
    case 'set_error':
      return { ...state, error: action.payload };
    case 'set_current':
      return { ...state, current: action.payload };
    default:
      return state;
  }
};

const query = (dispatch) => async () => {
  try {
    let products = [];
    let ref = firestore.collection('Producto');
    let allProducts = await ref.get();
    for (const doc of allProducts.docs) {
      let data = await doc.data();
      let product = {
        name: data.Nombre,
        points: data.PrecioPuntos,
        img: data.foto,
        type: data.Tipo,
      };
      products.push(product);
    }

    dispatch({ type: 'set_products', payload: products });
  } catch (error) {
    let errorMessage = 'An error with the database occurred!';
    const errorComponent = <p>{errorMessage}</p>;
    dispatch({ type: 'set_error', payload: errorComponent });
  }
};

const setCurrentProduct =
  (dispatch) =>
  async ({ name, points, img, type }) => {
    dispatch({
      type: 'set_current',
      payload: {
        name: name,
        points: points,
        img: img,
        type: type,
      },
    });
  };

export const { Provider, Context } = createDataContext(
  productDataReducer,
  { query, setCurrentProduct },
  { products: [], current: {} }
);
