/* IMPORT COMPONENTS */
import { useState, useContext } from "react";
import { Text, Heading, Box, Image, Badge, Stack } from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

import { Context } from "../context/CustomContext";

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
  /* STATES */
  const [updatedStock, setUpdatedStock] = useState(stock);

  const onAdd = (count) => {
    if (count <= updatedStock) {
      setUpdatedStock(updatedStock - count);
      console.log(
        `Añadiste ${count} unidades de ${title} (ID: ${id}) al carrito.`
      );
    }
  };

  //******** */
  const resultado = useContext(Context);
  console.log(resultado);
  //******** */

  /* RENDER */
  return (
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
      <Image src={image} alt={title} width="lg" />
      <Stack justifyContent="space-around">
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
      </Stack>
    </Stack>
  );
};

export default ItemDetail;
