import React, { useReducer } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";
import CartContext from "./CartContext";

const initialState = {
 cart: [],
};

const cartreducer = (state, { type, course }) => {
 if (type === ADD_TO_CART) {
  return {
   cart: state.cart.concat(course),
  };
 }

 if (type === REMOVE_FROM_CART) {
  return {
   cart: state.cart.filter(c => c !== course),
  };
 }
 return state;
};

const CartProvider = ({ children }) => {
 const [state, dispatch] = useReducer(cartreducer, initialState);
 return (
  <CartContext.Provider value={[state, dispatch]}>
   {children}
  </CartContext.Provider>
 );
};

export default CartProvider;
