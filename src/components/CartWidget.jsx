/* IMPORT COMPONENTS */
import { IconButton } from "@chakra-ui/react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

/*---------------------------------------------------------------------*/

const CartWidget = () => {
  return (
    <IconButton
      aria-label="Cart"
      boxShadow="3px 3px 10px #d6d6d6, -3px -3px 10px #ffffff"
      bg="white"
      p="6"
      borderRadius="full"
      color="neutral"
      icon={<ShoppingCartCheckoutIcon />}
    />
  );
};

export default CartWidget;
