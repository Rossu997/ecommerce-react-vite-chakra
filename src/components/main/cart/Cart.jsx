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
import ClientForm from "./ClientForm";

import { db, DB_COLLECTIONS } from "../../../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

/*---------------------------------------------------------------------*/

const Cart = () => {
  const { cart, totalPrice, removeFromCart } = useContext(CartContext);

  const clientData = {
    "first name": "Juan", //Esto lo tengo que sacara de un formulario, para que lo llene el usuario
    "last name": "Perez",
    email: "juanperez@gmail.com",
  };

  const endPurchase = () => {
    const dbCollection = collection(db, DB_COLLECTIONS[1]);
    (async () => {
      try {
        const post = await addDoc(dbCollection, {
          client: clientData,
          items: cart,
          time: serverTimestamp(),
          total: totalPrice,
        });
        console.log("post id response: ", post.id);
        //aca pone el clear del carrito
      } catch (error) {
        setError(true);
        console.log(error);
      }
    })();
  };

  if (!cart.length) {
    return (
      <Stack w="100%">
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
    <Stack as="article" w="100%" gap="1rem">
      <ReturnNavigation />
      {cart.map((item) => {
        return (
          <Stack
            key={item.id}
            p="4"
            flexDir="row"
            gap="2rem"
            bgColor="#fff"
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
      <Stack>
        <Heading fontSize="1rem" color="brand">
          Total price
        </Heading>
        <Heading>${totalPrice}</Heading>
      </Stack>
      <Stack flexDirection="row-reverse" alignItems="end" gap="1rem">
        <ResetCartAlert />
        <Button w="fit-content" bgColor="green.400" color="white">
          💸 End Purchase 💸
        </Button>
      </Stack>
      <ClientForm />
    </Stack>
  );
};

export default Cart;
