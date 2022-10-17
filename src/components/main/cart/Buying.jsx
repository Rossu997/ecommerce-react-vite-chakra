import { useContext, useState } from "react";
import { Button, Text, Heading, Stack } from "@chakra-ui/react";

import db from "../../../services/db";
import { CartContext } from "../../../context/CartContext";
import ClientForm from "./ClientForm";
import PurchaseModal from "./PurchaseModal";

/*---------------------------------------------------------------------*/

const Buying = () => {
  const { cart, cartUnits, totalPrice, resetCart } = useContext(CartContext);
  const [postData, setPostData] = useState("");

  const endPurchase = async (clientData) => {
    try {
      const purchaseId = await db.postSell(clientData, cart, 200);
      console.log("post id response: ", purchaseId);
      setPostData(purchaseId);
      resetCart();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack as="main" gap="1rem" w="100%">
      <Stack as="article" flexDirection="row-reverse" gap="4rem">
        <Stack
          as="aside"
          m="0 !important"
          p="8"
          borderWidth="1px"
          borderColor="neutralLight"
          borderRadius="lg"
          bgColor="white"
          w="30%"
        >
          <Heading fontSize="1rem" color="neutral">
            Purchse summary
          </Heading>
          <Stack
            flexDirection="row"
            alignItems="baseline"
            justifyContent="space-between"
          >
            <Text>{`Products (${cartUnits})`}</Text>
            <Text>{`$${totalPrice}`}</Text>
          </Stack>
          <Stack
            flexDirection="row"
            alignItems="baseline"
            justifyContent="space-between"
          >
            <Text>{`Shipping`}</Text>
            <Text color="green.400">Free</Text>
          </Stack>
        </Stack>
        <Stack
          as="section"
          m="0 !important"
          p="8"
          bgColor="white"
          borderRadius="20px"
          boxShadow="-5px -5px 10px #dddddd, 5px 5px 10px #ffffff"
          w="70%"
        >
          <Heading fontSize="2rem" mb="2rem">
            One last step...
          </Heading>
          <ClientForm endPurchase={endPurchase} />
          {postData && <PurchaseModal code={postData} />}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Buying;
