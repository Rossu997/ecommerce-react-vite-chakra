import { useContext, useState, useEffect } from "react";
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
  CircularProgress,
} from "@chakra-ui/react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { CartContext } from "../../../context/CartContext";
import { BuyContext } from "../../../context/BuyContext";
import db from "../../../services/db";
import CartItemCount from "./CartItemCount";

/*---------------------------------------------------------------------*/

const CartItem = ({ id, stock, image, title, price }) => {
  const { modifyQuantity, removeFromCart } = useContext(CartContext);
  const { cartItems } = useContext(BuyContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setProduct(await db.getSingleProduct(id));
      setIsLoading(false);
    })();
  }, []);

  const onModifyQuantity = (count, stock) => {
    modifyQuantity(count, id);
  };

  if (isLoading) {
    return <CircularProgress isIndeterminate color="brand" size="5rem" />;
  }

  return (
    <Stack
      key={product.id}
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
        gap="6rem"
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
            <Link as={ReachLink} to={`/item/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
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
            w="lg"
          >
            <Link
              as={ReachLink}
              to={`/item/${product.id}`}
              _hover={{
                color: "brand",
              }}
            >
              <Heading fontSize="1rem">{product.title}</Heading>
            </Link>
            <Text color="neutral">{`Unit price: $${product.price}`}</Text>
          </Stack>
        </Stack>

        <CartItemCount
          stock={product.stock}
          quantity={quantity}
          id={id}
          onModifyQuantity={onModifyQuantity}
        />

        <Stack>
          <Heading fontSize="2rem">${product.price * quantity}</Heading>
          <Text>{`Quantity: ${quantity}`}</Text>
        </Stack>
      </Stack>

      <IconButton
        onClick={() => removeFromCart(product.id)}
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
};

export default CartItem;
