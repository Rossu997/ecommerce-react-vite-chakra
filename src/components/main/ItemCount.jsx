import { useState, useEffect } from "react";
import { Text, Button, Box, Input, Stack } from "@chakra-ui/react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

/*---------------------------------------------------------------------*/

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

  const handlerIncrease = () => {
    count < stock && setCount(count + 1);
  };

  const handlerDecrease = () => {
    count > 1 && setCount(count - 1);
  };

  useEffect(() => {
    stock ? setCount(1) : setCount(0);
  }, [stock]);

  return (
    <Stack mt="10" alignItems="center" gap="6">
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
      <Button
        onClick={() => onAdd(count)}
        disabled={stock <= 0}
        borderRadius="20"
        boxShadow="-4px -4px 20px #d6d6d6, 4px 4px 20px #ffffff"
        background="linear-gradient(315deg, #ffffff, #f6f6f6)"
        py="8"
        px="8"
        color="neutral"
        fontFamily="text"
        fontWeight="600"
        fontSize="2xl"
        letterSpacing="2px"
        textTransform="uppercase"
        width="xs"
        textAlign="center"
        leftIcon={<AddShoppingCartOutlinedIcon />}
      >
        {stock ? "Add to cart" : "Out of stock"}
      </Button>
      <Box
        mx="auto"
        width="fit-content"
        mt="6"
        pt="3"
        borderTopWidth="1px"
        borderTopColor="neutralLight"
      >
        <Text
          fontSize="xs"
          fontFamily="text"
          color={stock ? "neutral" : "red"}
          fontWeight="400"
          letterSpacing="3px"
          px="20"
          textTransform="uppercase"
        >
          Available stock: {stock} un.
        </Text>
      </Box>
    </Stack>
  );
};

export default ItemCount;
