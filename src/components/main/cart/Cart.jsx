import { useContext, useEffect, useState } from "react";
import { Link as ReachLink } from "react-router-dom";
import {
  Button,
  Heading,
  Stack,
  Text,
  Image,
  Box,
  Link,
  IconButton,
} from "@chakra-ui/react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { CartContext } from "../../../context/CartContext";
import ReturnNavigation from "../ReturnNavigation";
import ResetCartAlert from "./ResetCartAlert";

/*---------------------------------------------------------------------*/

const Cart = () => {
  const { cart, totalPrice, removeFromCart } = useContext(CartContext);

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
    <Stack as="main" w="100%" gap="1rem">
      <ReturnNavigation />
      {cart.map((item) => {
        return (
          <Stack
            key={item.id}
            p="4"
            flexDir="row"
            gap="2rem"
            bgColor="white"
            borderRadius="20px"
            boxShadow="-5px -5px 10px #dddddd, 5px 5px 10px #ffffff"
          >
            <Box
              w="120px"
              h="120px"
              bgColor="white"
              borderRadius="20px"
              px="10px"
            >
              <Link as={ReachLink} to={`/item/${item.id}`} mb="1rem">
                <Image
                  src={item.image}
                  alt={item.title}
                  h="100px"
                  objectFit="contain"
                  m="10px auto"
                />
              </Link>
            </Box>

            <Stack borderLeftColor="neutral" borderLeftWidth="1px" pl="2rem">
              <Heading fontSize="1rem">{item.title}</Heading>
              <Text>{`Price: $${item.price}`}</Text>
            </Stack>

            <Stack>
              <Heading fontSize="2rem">${item.price * item.quantity}</Heading>
              <Text>{`Quantity: ${item.quantity}`}</Text>
            </Stack>

            <IconButton
              onClick={() => removeFromCart(item.id)}
              aria-label="RemoveFromCart"
              bgColor="white"
              borderWidth="1px"
              borderColor="neutralLight"
              borderRadius="full"
              color="neutral"
              icon={<CloseOutlinedIcon />}
              _hover={{
                backgroundColor: "red",
                color: "white",
              }}
            />
          </Stack>
        );
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
