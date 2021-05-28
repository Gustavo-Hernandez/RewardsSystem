import React from 'react';
import { auth, firestore } from '../api/firebase';
import createDataContext from "./createDataContext";

const userDataReducer = (state, action) =>{
    switch (action.type){
        case 'set_data':
            return { ...state, uid: action.payload.uid, email: action.payload.email, points: action.payload.points, error: ''};
        case 'set_error':
            return { ...state, error: action.payload };
        case 'set_pointChange':
            return { ...state, points: action.payload};
        default:
                return state;
    }
};

const query = (dispatch) => async () => {
    try{
        let uid = auth.currentUser.uid
        let docRef = firestore.collection("Client").doc(uid);
        let user = await (await docRef.get()).data();
        dispatch({ type: 'set_data', payload: {
                uid: uid,
                email: user.email,
                points: user.points
            }});
    } catch (error) {
        let errorMessage = 'An error with the database occurred!';
        const errorComponent = <p>{errorMessage}</p>;
        dispatch({ type: 'set_error', payload: errorComponent });
    }
};

const queryByID = (dispatch) => async (uid) => {
    try{
        console.log(uid);
        let docRef = firestore.collection("Client").doc(uid);
        let user = await (await docRef.get()).data();
        dispatch({ type: 'set_data', payload: {
                uid: uid,
                email: user.email,
                points: user.points
            }});
    } catch (error) {
        const errorComponent = <p>Error</p>;
        dispatch({ type: 'set_error', payload: errorComponent });
    }
};

const updatePoints = (dispatch) => async ({ change, uid }) => {
    try{
        let docRef = firestore.collection("Client").doc(uid);
        await docRef.update({
            points: change
        })
        dispatch({ type: 'set_pointChange', payload: change });
    } catch (error) {
        const errorComponent = <p>Error</p>;
        dispatch({ type: 'set_error', payload: errorComponent });
    }
};


export const { Provider, Context } = createDataContext(
    userDataReducer,
    { query, queryByID, updatePoints },
    { uid: '', error: '', email: '', points: '' }
);