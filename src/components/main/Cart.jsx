import React, { useContext } from "react";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Title } from "@mui/icons-material";

import { Context } from "../../context/CartContext";

/*---------------------------------------------------------------------*/

const Cart = () => {
  const { cart } = useContext(Context);

  if (cart.lenght === 0) {
    return (
      <Heading>
        No agregaste productos. Agregá alguno de <Link to="/">acá</Link>
      </Heading>
    );
  }

  return (
    <>
      {cart.map((item) => {
        return <Title key={item.id}>{item.title}</Title>;
      })}
    </>
  );
};

export default Cart;
