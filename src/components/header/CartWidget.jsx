import { useContext } from "react";
import { IconButton, Box } from "@chakra-ui/react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { CartContext } from "../../context/CartContext";

/*---------------------------------------------------------------------*/

const CartWidget = () => {
  const { cart, cartUnits } = useContext(CartContext);

  return (
    <Box position="relative">
      <IconButton
        aria-label="Cart"
        bgColor="white"
        borderWidth="1px"
        borderColor="neutralLight"
        p="6"
        borderRadius="full"
        color="neutral"
        icon={<ShoppingCartOutlinedIcon />}
      />
      {!!cartUnits && (
        <Box
          bgColor="brand"
          borderRadius="full"
          h="24px"
          w="auto"
          minW="24px"
          pt="2px"
          textAlign="center"
          position="absolute"
          top="-10px"
          left="55px"
          color="white"
          fontWeight="600"
          fontSize="14px"
        >
          {cartUnits}
        </Box>
      )}
    </Box>
  );
};

export default CartWidget;
