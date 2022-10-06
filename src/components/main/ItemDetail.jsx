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
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

import ItemCount from "./ItemCount";
import ReturnNavigation from "./ReturnNavigation";
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
      addToCart(count, id, title, price, image);
      setGoToCartBtn(true);
    }
  };

  return (
    <Stack>
      <ReturnNavigation />
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
          <ItemCount stock={updatedStock} onAdd={onAdd} />
          {goToCartBtn && (
            <Stack flexDir="row-reverse">
              <Link to="/cart">
                <Button
                  leftIcon={<ShoppingCartCheckoutOutlinedIcon />}
                  bgColor="brand"
                  color="white"
                  colorScheme="brand"
                >
                  End Purchase
                </Button>
              </Link>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ItemDetail;
