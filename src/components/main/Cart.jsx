import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";

import ReturnHome from "./ReturnHome";
import { CartContext } from "../../context/CartContext";

/*---------------------------------------------------------------------*/

const Cart = () => {
  const { cart, removeFromCart, resetCart } = useContext(CartContext);

  if (!cart.length) {
    return (
      <Stack w="100%">
        <ReturnHome />
        <Heading>
          your cart is empty
          <Link to="/">
            <Text color="brand">Lets add some products!</Text>
          </Link>
        </Heading>
      </Stack>
    );
  }
  return (
    <Stack w="100%" gap="1rem">
      <ReturnHome />
      {cart.map((item) => {
        return (
          <Stack key={item.id} bgColor="neutralLight" p="2">
            <Stack>
              <Heading fontSize="1rem">{item.title}</Heading>
              <Text>{`Precio: $${item.price}`}</Text>
              <Text>{`Cantidad: ${item.quantity}`}</Text>
            </Stack>
            <Stack>
              <Button onClick={() => removeFromCart(item.id)}>
                Remove Item
              </Button>
            </Stack>
          </Stack>
        );
      })}
      <Stack flexDirection="row-reverse" alignItems="baseline" gap="1rem">
        <Button
          onClick={() => resetCart()}
          w="fit-content"
          bgColor="nautralLight"
        >
          Clear Cart
        </Button>
        <Button w="fit-content" bgColor="primary" color="white">
          End Purchase
        </Button>
      </Stack>
    </Stack>
  );
};

export default Cart;
