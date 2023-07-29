import { REMOVE_FAV, ADD_FAV, FILTER, ORDER } from "./actions-types"

import axios from "axios";

const endpoint = 'http://localhost:3001/rickandmorty/fav';

export const addFav = (character) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.post(`${endpoint}`, character);
         //if(!data.length) throw new Error ('No hay favoritos')

         return dispatch({
            type: ADD_FAV,
            payload: data,
         });

      } catch (error) {
         console.log(error.message);
      }
   };
};

export const removeFav = (id) => {
    return async (dispatch) => {
      try {
         const { data } = await axios.delete(`${endpoint}/${id}`);
         //if(!data.length) throw new Error ('No hay favoritos')

         return dispatch({
            type: REMOVE_FAV,
            payload: data,
      }); 
      } catch (error) {
         console.log(error.message);
      }
    };
 };
 
export const filterCards = (gender) => {
    return{
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) => {
    return{
        type: ORDER, 
        payload: orden
    }
}

