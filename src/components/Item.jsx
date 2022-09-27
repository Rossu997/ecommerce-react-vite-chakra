/* IMPORT COMPONENTS */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Text, Heading, Box, Image, Badge, Stack } from "@chakra-ui/react";
import ItemCount from "./ItemCount";

/*---------------------------------------------------------------------*/

const Item = ({
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
  /* const [initial, setInitial] = useState(0 + !!updatedStock); */
  // Saco el Initial que le pasaba como parámetro a el contador y se lo paso a ese componente

  const onAdd = (count) => {
    if (count <= updatedStock) {
      setUpdatedStock(updatedStock - count);
      console.log(`Añadiste ${count} unidades al carrito.`);
    }
  };

  /* RENDER */
  return (
    <Stack
      as="article"
      maxW="lg"
      borderRadius="50px"
      alignItems="center"
      gap="10"
      bgColor="#fff"
      px="40px"
      py="10"
      margin="0 !important"
      boxShadow="-10px -10px 30px #e6e6e6, 10px 10px 30px #ffffff"
    >
      <Stack display="flex" justifyContent="center">
        <Link to={`/item/${id}`}>
          <Image src={image} alt={"some alt text"} w="300px" />
        </Link>
      </Stack>
      <Box>
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
        <Stack mt="3">
          <Heading as="h3" color="black">
            {title}
          </Heading>
          <Text noOfLines="2" color="neutralDark" fontWeight="500">
            {description}
          </Text>
          <Box>
            <Heading
              color="primary"
              borderTopWidth="1px"
              borderTopColor="neutralLight"
              pt="3"
              mt="6"
            >
              {`$${price}`}
            </Heading>
          </Box>
        </Stack>
        <ItemCount stock={updatedStock} /* initial={initial} */ onAdd={onAdd} />
      </Box>
    </Stack>
  );
};

/* EXPORT COMPONENT */
export default Item;
