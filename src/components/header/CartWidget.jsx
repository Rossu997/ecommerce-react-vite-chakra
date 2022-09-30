/* IMPORT COMPONENTS */
import { IconButton } from "@chakra-ui/react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

/*---------------------------------------------------------------------*/

const CartWidget = () => {
  return (
    <IconButton
      aria-label="Cart"
      bgColor="white"
      borderWidth="1px"
      borderColor="neutralLight"
      p="6"
      borderRadius="full"
      color="neutral"
      icon={<ShoppingCartCheckoutIcon />}
    />
  );
};

export default CartWidget;
