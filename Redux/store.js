import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"; //middleware
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./Reducers/productReducer";
import { cartReducer } from "./Reducers/cardReducer";

// if there is sigal Reducer then we can pass it normally,we can't pass maltiple reducers ,so we need to combine all reducers in one reducers
//combineReducers take one object as a argument
const reducers = combineReducers({
  // key:reducers
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});

//initialization middleware
const middleware = [thunk];

//createStore is function which is used to create store,it take two argument ,first one is reducers and second is middleware
const store = createStore(
  reducers,
  //middleware will send as argument to composeWithDevTools function
  //applyMiddleware is used to pass middleware to the devtools
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
//now we will wrap our whole application in store using react-redux npm packgae,like we wrap for context api
