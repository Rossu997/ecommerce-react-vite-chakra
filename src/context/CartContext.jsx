import { createContext, useState } from "react";

/*---------------------------------------------------------------------*/

export const Context = createContext();

const { Provider } = Context;
//{Provider(trae la info. mensajero), Consumer(la info. mensaje)} //No usamos el consumer, usamos el hook useContext

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
    <Provider value={{ cart, addToCart, removeFromCart, resetCart }}>
      {children}
    </Provider>
  );
};

export default CartContext;
