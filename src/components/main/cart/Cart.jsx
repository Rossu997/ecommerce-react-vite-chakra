import { useContext } from "react";
import { Link as ReachLink } from "react-router-dom";
import { Button, Heading, Stack, Text, Box, Link } from "@chakra-ui/react";

import { CartContext } from "../../../context/CartContext";
import ReturnNavigation from "../ReturnNavigation";
import CartItem from "./CartItem";
import ResetCartAlert from "./ResetCartAlert";
import db from "../../../services/db";

/*---------------------------------------------------------------------*/

const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext);

  if (!cart.length) {
    return (
      <Stack as="main" w="100%">
        <ReturnNavigation />
        <Heading>
          your cart is empty
          <Link as={ReachLink} to="/" color="brand">
            <Text>Lets add some products!</Text>
          </Link>
        </Heading>
      </Stack>
    );
  }

  return (
    <Stack as="main" w="100%" gap="2rem">
      <ReturnNavigation />

      {cart.map((item) => {
        return <CartItem {...item} key={item.id} />;
      })}

      <Stack flexDirection="row-reverse">
        <Box mt="4rem">
          <Heading fontSize="1rem" color="brand" textAlign="right">
            Final Price
          </Heading>
          <Heading>${totalPrice}</Heading>
        </Box>
      </Stack>
      <Stack flexDirection="row-reverse" alignItems="end" gap="1rem">
        <Button
          onClick={() => {
            db.postCompromisedStock(cart);
          }}
          as={ReachLink}
          to={"/cart/buying"}
          w="fit-content"
          bgColor="brand"
          color="white"
        >
          Continue
        </Button>
        <ResetCartAlert />
      </Stack>
    </Stack>
  );
};

export default Cart;
