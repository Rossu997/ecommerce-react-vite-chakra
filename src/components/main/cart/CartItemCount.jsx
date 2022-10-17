import { useContext, useState, useEffect } from "react";
import { Text, Button, Box, Input, Stack } from "@chakra-ui/react";

import db from "../../../services/db";

/*---------------------------------------------------------------------*/

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(0);

  const handlerIncrease = () => {
    count < stock && setCount(count + 1);
  };

  const handlerDecrease = () => {
    count > 1 && setCount(count - 1);
  };

  useEffect(() => {
    stock ? setCount(1) : setCount(0);
  }, []);

  return (
    <Stack mt="10" alignItems="center" justifyContent="center" gap="2" pt="5px">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        gap="5"
      >
        <Button
          onClick={handlerDecrease}
          size="sm"
          fontWeight="400"
          fontSize="md"
          color="neutral"
          backgroundColor="white"
          borderRadius="5"
          disabled={stock <= 0 || count <= 1}
          boxShadow={
            count > 1 && stock > 0
              ? "-2px -2px 10px #d6d6d6, 2px 2px 10px #ffffff"
              : "inset -3px -3px 8px #dddddd, inset 3px 3px 8px #ffffff !important"
          }
        >
          -
        </Button>
        <Input
          readOnly
          value={count}
          type="number"
          bgColor="white"
          width="20"
          textAlign="center"
          borderRadius="50px"
          fontFamily="text"
        />
        <Button
          onClick={handlerIncrease}
          size="sm"
          fontWeight="400"
          fontSize="md"
          color="neutral"
          backgroundColor="white"
          borderRadius="5"
          disabled={stock <= 0 || count >= stock}
          boxShadow={
            count < stock
              ? "-2px -2px 10px #d6d6d6, 2px 2px 10px #ffffff"
              : "inset -3px -3px 8px #dddddd, inset 3px 3px 8px #ffffff !important"
          }
        >
          +
        </Button>
      </Stack>

      <Text
        fontSize="xs"
        fontFamily="text"
        color={stock ? "neutral" : "red"}
        fontWeight="400"
        letterSpacing="3px"
        textTransform="uppercase"
      >
        Available stock: {stock} un.
      </Text>
    </Stack>
  );
};

export default ItemCount;
