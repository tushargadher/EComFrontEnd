import axios from "axios";
import * as actionType from "../Constants/productConstants";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://ecombackend.tushargadher25.repl.co/products`);
    // console.log(data);
    //dispatch function will call reducers internally
    dispatch({ type: actionType.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    // console.log("Error while calling getproduct api", error.message);
    dispatch({ type: actionType.GET_PRODUCT_FAIL, payload: error.message }); //if fail then send error message in payload
  }
};

export const getProductsDetails = (id) => async (dispatch) => {
  try {
    //sending request
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`https://ecombackend.tushargadher25.repl.co/product/${id}/`);
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

//AFTER CALLING DISPATCH IT WILL GO TO REDUSER
