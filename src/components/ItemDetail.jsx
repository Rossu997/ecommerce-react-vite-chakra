/* IMPORT COMPONENTS */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Text, Heading, Box, Image, Badge } from "@chakra-ui/react";
import ItemCount from "./ItemCount";

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
  const [initial, setInitial] = useState(0 + !!updatedStock);

  const onAdd = (count) => {
    setUpdatedStock(updatedStock - count);
    console.log(`Añadiste ${count} unidades al carrito.`);
  };

  /* RENDER */
  return (
    <Box as="main" display="flex" justifyContent="center">
      <Box
        maxW="8xl"
        minW="md"
        borderWidth="1px"
        borderRadius="lg"
        display="flex"
        gap="20"
        px="5rem"
        py="2rem"
        bgColor="white"
      >
        <Image src={image} alt={title} width="sm" />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Box mt="2" fontWeight="semibold" lineHeight="tight">
            <Badge borderRadius="full" px="6" py="2" mb="4" colorScheme="brand">
              {category}
            </Badge>
            <Heading>{title}</Heading>
            <Text my="4">{description}</Text>
            <Heading>{`$${price}`}</Heading>
          </Box>
          <ItemCount stock={updatedStock} initial={initial} onAdd={onAdd} />
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetail;
