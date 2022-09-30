import { useContext } from "react";
import { Link } from "react-router-dom";
import { Heading, Stack, Text } from "@chakra-ui/react";

import ReturnHome from "./ReturnHome";
import { Context } from "../../context/CartContext";

/*---------------------------------------------------------------------*/

const Cart = () => {
  /* const { cart } = useContext(Context);

  if (cart.lenght === 0) {
    return (
      <Heading>
        No agregaste productos. Agregá alguno de <Link to="/">acá</Link>
      </Heading>
    );
  } */

  return (
    <Stack>
      <ReturnHome />
      <Heading>
        No agregaste productos. Agregá alguno de
        <Link to="/">
          <Text color="brand">acá</Text>
        </Link>
      </Heading>
      {/* {cart.map((item) => {
        return <Heading key={item.id}>{item.title}</Heading>;
      })} */}
    </Stack>
  );
};

export default Cart;
