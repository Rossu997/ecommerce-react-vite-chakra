/* IMPORT COMPONENTS */
import Item from "./Item";
import { Stack } from "@chakra-ui/react";

/*---------------------------------------------------------------------*/

const ItemList = ({ products }) => {
  function getRandomStock() {
    return Math.floor(Math.random() * 10);
  }

  /* RENDER */
  return (
    <Stack
      as="section"
      flexWrap="wrap"
      flexDir="row"
      justifyContent="center"
      gap="100px"
    >
      {products.map((item) => {
        return <Item {...item} key={item.id} stock={getRandomStock()} />;
      })}
    </Stack>
  );
};

/* EXPORT COMPONENT */
export default ItemList;
