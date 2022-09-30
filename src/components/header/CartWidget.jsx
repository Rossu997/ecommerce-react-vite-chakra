import { IconButton, Box, Stack } from "@chakra-ui/react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

/*---------------------------------------------------------------------*/

const CartWidget = () => {
  return (
    <Stack flexDir="row">
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
      <Box bgColor="red" borderRadius="full">
        3
      </Box>
    </Stack>
  );
};

export default CartWidget;
