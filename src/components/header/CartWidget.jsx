import { useContext, useEffect, useState } from "react";
import { IconButton, Box, Stack } from "@chakra-ui/react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

import { CartContext } from "../../context/CartContext";

/*---------------------------------------------------------------------*/

const CartWidget = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const { cart } = useContext(CartContext);

  //Actualiza la cantidad total de items que hay en el carrito
  useEffect(() => {
    if (cart.length > 0) {
      const newCartQuantity = cart.reduce(
        (acc, current) => acc + current.quantity,
        0
      );
      setCartQuantity(newCartQuantity);
      console.log("Entro al effect");
      console.log("La cantidad de items en el cart es: ", cartQuantity);
    } else {
      setCartQuantity(0);
      console.log("Entro al effect pero no hay nada en el carro");
    }
  }, [cart]);

  return (
    <Box position="relative">
      <IconButton
        aria-label="Cart"
        bgColor="white"
        borderWidth="1px"
        borderColor="neutralLight"
        p="6"
        borderRadius="full"
        color="neutral"
        icon={<ShoppingCartCheckoutIcon />}
      />
      {!!cartQuantity && (
        <Box
          bgColor="brand"
          borderRadius="full"
          h="24px"
          w="auto"
          minW="24px"
          pt="2px"
          textAlign="center"
          position="absolute"
          top="-10px"
          left="55px"
          color="white"
          fontWeight="600"
          fontSize="14px"
        >
          {cartQuantity}
        </Box>
      )}
    </Box>
  );
};

export default CartWidget;
