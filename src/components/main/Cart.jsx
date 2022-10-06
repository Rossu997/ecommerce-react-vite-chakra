import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Heading, Stack, Text, Image, Box } from "@chakra-ui/react";

import ReturnNavigation from "./ReturnNavigation";
import { CartContext } from "../../context/CartContext";
import ResetCartAlert from "./ResetCartAlert";

{
  /* <Button
          onClick={() => resetCart()}
          w="fit-content"
          bgColor="nautralLight"
        >
          Clear Cart
        </Button> */
}
/*---------------------------------------------------------------------*/

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (!cart.length) {
    return (
      <Stack w="100%">
        <ReturnNavigation />
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
      <ReturnNavigation />
      {cart.map((item) => {
        return (
          <Stack
            key={item.id}
            bgColor="neutralLight"
            p="4"
            flexDir="row"
            gap="2rem"
          >
            <Box
              w="120px"
              h="120px"
              bgColor="white"
              borderRadius="20px"
              px="10px"
            >
              <Image
                src={item.image}
                alt={item.title}
                h="100px"
                objectFit="contain"
                m="10px auto"
              />
            </Box>
            <Stack>
              <Heading fontSize="1rem" maxW="80%">
                {item.title}
              </Heading>
              <Text>{`Precio: $${item.price}`}</Text>
              <Text>{`Cantidad: ${item.quantity}`}</Text>
            </Stack>
            <Button onClick={() => removeFromCart(item.id)}>X</Button>
          </Stack>
        );
      })}
      <Stack flexDirection="row-reverse" alignItems="end" gap="1rem">
        <ResetCartAlert />
        <Button w="fit-content" bgColor="primary" color="white">
          End Purchase
        </Button>
      </Stack>
    </Stack>
  );
};

export default Cart;
