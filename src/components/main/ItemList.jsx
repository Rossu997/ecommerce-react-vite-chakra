import { Stack } from "@chakra-ui/react";

import Item from "./Item";

/*---------------------------------------------------------------------*/

const ItemList = ({ products }) => {
  /* function getRandomStock() {
    return Math.floor(Math.random() * 10);
  } */

  return (
    <Stack
      as="section"
      flexWrap="wrap"
      flexDir="row"
      justifyContent="center"
      gap="100px"
    >
      {products.map((item) => {
        return <Item {...item} key={item.id} />;
      })}
    </Stack>
  );
};

export default ItemList;
