//reducer is called by dispatch
import * as actionType from "../Constants/cartConstants";
export const cartReducer = (state = { cartItems: [] }, action) => {
  //action  cantain object which is send by dispatch {type,payload}
  //state means already stored value in store,while action is new item will we stored in stored
  switch (action.type) {
    case actionType.ADD_TO_CART:
      //if item is allready in cart then don't add
      const item = action.payload; //item which we want to add into store
      const exist = state.cartItems.find((product) => product.id === item.id);

      //if item already exist in store
      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((data) =>
            data.product === exist.product ? item : data
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
