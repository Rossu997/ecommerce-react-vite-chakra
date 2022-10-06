import React, { useContext } from "react";
import {
  useDisclosure,
  Button,
  Icon,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { CartContext } from "../../context/CartContext";

/*---------------------------------------------------------------------*/

const ResetCartAlert = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { resetCart } = useContext(CartContext);

  return (
    <>
      <Button
        bgColor="white"
        onClick={onOpen}
        leftIcon={<RemoveShoppingCartOutlinedIcon />}
      >
        Wipe Cart
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete all items in your cart
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={() => resetCart() && onClose}
                colorScheme="red"
                ml={3}
                leftIcon={<DeleteOutlinedIcon />}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ResetCartAlert;
