import * as actionType from "../Constants/productConstants";
// state is current state or value
//action have updated value which dispatch function send
export const getProductsReducer = (state = { products: [] }, action) => {
  // state = { products: [] } we write because if the action type is fail we will return empty array so UI will not break
  switch (action.type) {
    case actionType.GET_PRODUCT_SUCCESS:
      return { products: action.payload };
    case actionType.GET_PRODUCT_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

//in reducer there is always switch case
export const getProductDetailsReducer = (state = { product: {} }, action) => {
  // state = { products: {} } it is default value of state
  switch (action.type) {
    case actionType.GET_PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case actionType.GET_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case actionType.GET_PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case actionType.GET_PRODUCT_DETAILS_RESET:
      return { product: {} };
    default:
      return state;
  }
};
