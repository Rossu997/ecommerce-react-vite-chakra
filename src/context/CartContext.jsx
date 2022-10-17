import { createContext, useState, useEffect } from "react";

/*---------------------------------------------------------------------*/
//{Provider(trae la info. mensajero), Consumer(la info. mensaje)}
//No usamos el consumer
//Usamos el hook useContext en el componente que queremos usar las props

export const CartContext = createContext();
const cartLS = JSON.parse(localStorage.getItem("cart"));

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartLS || []);
  const [cartUnits, setCartUnits] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //Persiste cart en LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //Calcula el precio total de cart
  useEffect(() => {
    if (cart.length > 0) {
      const newTotalPrice = cart.reduce(
        (acc, current) => acc + current.price * current.quantity,
        0
      );
      setTotalPrice(newTotalPrice);
    } else {
      setTotalPrice(0);
    }
  }, [cart]);

  //Calcula la cantidad de unidades en cart
  useEffect(() => {
    if (cart.length > 0) {
      const newcartUnits = cart.reduce(
        (acc, current) => acc + current.quantity,
        0
      );
      setCartUnits(newcartUnits);
    } else {
      setCartUnits(0);
    }
  }, [cart]);

  //Añade un item al carrito o aumenta la cantidad de un item que ya se encuentre en el carrito
  const addToCart = (quantity, id, title, price, image) => {
    const positionInCart = isInCart(id);
    if (positionInCart !== -1) {
      const newQuantity = cart[positionInCart].quantity + quantity;
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { quantity, id, title, price, image }]);
    }
  };

  //Funcion interna que checkea si un item ya está en el carrito
  const isInCart = (itemId) => {
    return cart.findIndex((e) => e.id === itemId);
  };

  //Busca un item que esté en el carrito y lo elimina
  const removeFromCart = (id) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart(newCart);
  };

  //Bora todos los items del carrito, dejándolo vacío
  const resetCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartUnits,
        totalPrice,
        addToCart,
        removeFromCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
