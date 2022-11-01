import { createContext, useState, useEffect, useContext } from "react";
import db from "../services/db";

import { CartContext } from "./CartContext";

/*---------------------------------------------------------------------*/

export const BuyContext = createContext();

const BuyProvider = ({ children }) => {
  const { cart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  //Trae toda la info actualizada de los items del cart desde la db
  useEffect(() => {
    (async () => {
      const promesas = await Promise.all(
        cart.map((item) => {
          const data = db.getSingleProduct(item.id);
          return data;
        })
      );
      setCartItems(promesas);
    })();
  }, [cart.length]);

  //Pruebita
  /* useEffect(() => {
    (async () => {
      const listaProductos = await db.getProducts();
      const listaIds = cart.map((item) => {
        return item.id;
      });
      const resultado = listaProductos.filter((item) =>
        listaIds.includes(item.id)
      );
      console.log("Traigo todo y filtro ", resultado);
    })();
  }, [cart]); */

  //Funcion para traer precios

  /* useEffect(() => {
    if (cart.length) {
      const prices = Promise.all(
        cart.map(async (item) => {
          return await db.getSinglePrice(item.id);
        })
      );
      console.log(prices);

      const newTotalPrice = cart.reduce(
        (acc, current) => acc + current.price * current.quantity,
        0
      );
      setTotalPrice(newTotalPrice);
    }

    !cart.length && setTotalPrice(0);
  }, [cart]); */

  return (
    <BuyContext.Provider value={{ cartItems }}>{children}</BuyContext.Provider>
  );
};

export default BuyProvider;
