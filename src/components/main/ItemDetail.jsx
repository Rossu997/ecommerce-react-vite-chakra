import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Text,
  Heading,
  Box,
  Image,
  Badge,
  Stack,
  Button,
} from "@chakra-ui/react";

import ItemCount from "./ItemCount";
import ReturnHome from "./ReturnHome";
import { CartContext } from "../../context/CartContext";

/*---------------------------------------------------------------------*/

const ItemDetail = ({
  stock,
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}) => {
  const [updatedStock, setUpdatedStock] = useState(stock);
  const [goToCartBtn, setGoToCartBtn] = useState(false);
  const { cart, addToCart } = useContext(CartContext);

  const onAdd = (count) => {
    if (count <= updatedStock) {
      setUpdatedStock(updatedStock - count);
      addToCart(count, id, title, price);
      setGoToCartBtn(true);
    }
  };

  return (
    <Stack>
      <ReturnHome />
      <Stack
        as="main"
        maxW="8xl"
        minW="md"
        borderWidth="1px"
        borderRadius="lg"
        flexDir="row"
        gap="20"
        px="5rem"
        py="2rem"
        bgColor="white"
      >
        <Image src={image} alt={title} maxH="600px" objectFit="contain" />
        <Stack justifyContent="space-between">
          <Box>
            <Link to={`/category/${category}`}>
              <Badge
                bgColor="secondary"
                color="white"
                letterSpacing="2px"
                borderRadius="full"
                px="4"
                py="1"
              >
                {category}
              </Badge>
            </Link>
            <Heading as="h3" color="black" my="4">
              {title}
            </Heading>
            <Text color="neutralDark" fontWeight="500" maxW="lg">
              {description}
            </Text>
            <Box>
              <Heading
                color="primary"
                borderTopWidth="1px"
                borderTopColor="neutralLight"
                pt="3"
                mt="10"
              >
                {`$${price}`}
              </Heading>
            </Box>
          </Box>
          {goToCartBtn ? (
            <Link to="/cart">
              <Button>End Purchase</Button>
            </Link>
          ) : (
            <ItemCount stock={updatedStock} onAdd={onAdd} />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ItemDetail;
