import React from 'react';
import {auth, firestore} from '../api/firebase';
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
        uid: doc.id,
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

const queryByID = (dispatch) => async (uid) => {
  try{
    let docRef = firestore.collection("Producto").doc(uid);
    let data = await (await docRef.get()).data();
    dispatch({ type: 'set_current', payload: {
        name: data.Nombre,
        points: data.PrecioPuntos,
        img: 'data:image/webp;base64,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',
        type: data.Tipo
      }});
  } catch (error) {
    let errorMessage = 'An error with the database occurred!';
    const errorComponent = <p>{errorMessage}</p>;
    dispatch({ type: 'set_error', payload: errorComponent });
  }
}

export const { Provider, Context } = createDataContext(
  productDataReducer,
  { query, setCurrentProduct, queryByID },
  { products: [], current: {} }
);
