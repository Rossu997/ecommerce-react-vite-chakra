import { Stack } from "@chakra-ui/react";

import Item from "./Item";

/*---------------------------------------------------------------------*/

const ItemList = ({ products }) => {
  return (
    <Stack
      as="section"
      flexWrap="wrap"
      flexDir="row"
      justifyContent="center"
      gap="50px"
    >
      {products.map((item) => {
        return <Item {...item} key={item.id} />;
      })}
    </Stack>
  );
};

export default ItemList;
