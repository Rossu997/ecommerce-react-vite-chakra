import { useContext } from "react";
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
    <Stack as="main" w="100%" gap="2rem">
      <ReturnNavigation />
      {cart.map((item) => {
        return (
          <Stack
            key={item.id}
            py="4"
            px="8"
            flexDir="row"
            justifyContent="space-between"
            bgColor="white"
            borderRadius="20px"
            boxShadow="-5px -5px 10px #dddddd, 5px 5px 10px #ffffff"
            position="relative"
          >
            <Stack
              flexDirection="row"
              gap="24rem"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack flexDirection="row" gap="2rem" alignItems="center">
                <Box
                  w="120px"
                  h="120px"
                  bgColor="white"
                  borderRadius="20px"
                  px="10px"
                >
                  <Link as={ReachLink} to={`/item/${item.id}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      h="100px"
                      objectFit="contain"
                      m="10px auto"
                    />
                  </Link>
                </Box>
                <Stack
                  borderLeftColor="neutral"
                  borderLeftWidth="1px"
                  pl="2rem"
                  maxWidth="lg"
                >
                  <Link
                    as={ReachLink}
                    to={`/item/${item.id}`}
                    _hover={{
                      color: "brand",
                    }}
                  >
                    <Heading fontSize="1rem">{item.title}</Heading>
                  </Link>
                  <Text color="neutral">{`Unit price: $${item.price}`}</Text>
                </Stack>
              </Stack>

              <Stack>
                <Heading fontSize="2rem">
                  ${(item.price * item.quantity).toFixed(2)}
                </Heading>
                <Text>{`Quantity: ${item.quantity}`}</Text>
              </Stack>
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
              position="absolute"
              top="4px"
              right="10px"
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
