import React, { createContext, useState } from "react";

//CART CONTEXT

export const Context = createContext();

//{Provider(trae la info. mensajero), Consumer(la info. mensaje)} //No usamos el consumer, usamos el hook useContext

const { Provider } = Context;

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart) {
      setCart([...cart, { item, quantity }]);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const removeFromCart = () => {};

  const resetCart = () => {
    setCartItems([]);
  };

  const isInCart = () => {
    return cart.findInex((e) => e.id === item.id);
  };

  return (
    <Provider value={{ addToCart, removeFromCart, resetCart }}>
      {children}
    </Provider>
  );
};

export default CustomContext;
