import { useContext, useState } from "react";
import { Text, Heading, Stack } from "@chakra-ui/react";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db, DB_COLLECTIONS } from "../../../firebase/firebase";
import { CartContext } from "../../../context/CartContext";
import ClientForm from "./ClientForm";
import PurchaseModal from "./PurchaseModal";

/*---------------------------------------------------------------------*/

const Buying = () => {
  const { cart, cartUnits, totalPrice, resetCart } = useContext(CartContext);
  const [postData, setPostData] = useState("");

  const endPurchase = (clientData) => {
    const dbCollection = collection(db, DB_COLLECTIONS[1]);
    (async () => {
      try {
        const post = await addDoc(dbCollection, {
          client: clientData,
          items: cart,
          time: serverTimestamp(),
          total: totalPrice,
        });
        cart.forEach((item) => {
          updateStock(item);
        });
        setPostData(post.id);
        resetCart();
      } catch (error) {
        console.error(error);
      }
    })();
  };

  const updateStock = (item) => {
    console.log("en el updatestock. Id de c7prod en el cart", item.id);
    const docRef = doc(db, DB_COLLECTIONS[0], item.id);
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
          h="fit-content"
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
