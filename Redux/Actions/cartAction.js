import axios from "axios";
import * as actionType from "../Constants/cartConstants";
export const addTocard = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://ecombackend.tushargadher25.repl.co/product/${id}`
    );
    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message });
    console.log(error.message);
  }
};
export const removeFromCard = (id) => async (dispatch) => {
  dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
};
