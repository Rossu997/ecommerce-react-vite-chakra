import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Heading,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";

const PurchaseModal = ({ code }) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal
        blockScrollOnMount={true}
        isOpen={true}
        onClose={() => navigate(-1)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tracking code</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading fontSize="1.5rem" color="brand">
              Thank you!
            </Heading>
            <Text mb="1rem">
              Whit this code you can track the status of your purchase:
            </Text>
            <Editable
              mt="2rem"
              backgroundColor="neutralLight"
              borderRadius="5"
              p="2"
              textAlign="center"
              defaultValue={code}
            >
              <EditablePreview />
              <EditableInput readOnly />
            </Editable>
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor="secondary"
              color="white"
              mr={3}
              onClick={() => navigate(-1)}
            >
              Return to Cart
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PurchaseModal;
