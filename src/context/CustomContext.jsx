import React, { createContext, useState } from "react";

//CART CONTEXT

export const Context = createContext();

//{Provider(trae la info. mensajero), Consumer(la info. mensaje)} //No usamos el consumer, usamos el hook useContext

const { Provider } = Context;

const CustomContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([{ nombre: "juan" }]);

  const añadir = (producto, cantidad) => {
    console.log(producto);
    console.log(cantidad);
    console.log("Se añade un producto y cierta cantidad al carro");
  };
  const quitar = () => {};
  const reset = () => {
    setCartItems([]);
  };

  return (
    <Provider value={{ cartItems, añadir, quitar, reset }}>{children}</Provider>
  );
};

export default CustomContext;
