import { useState, useEffect } from "react";
import { Button, Text, Heading, Stack } from "@chakra-ui/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db, DB_COLLECTIONS } from "../../../firebase/firebase";
import ReturnNavigation from "../ReturnNavigation";
import ClientForm from "./ClientForm";

/*---------------------------------------------------------------------*/

const datosComprador = {
  "first name": "Juan", //Esto lo tengo que sacara de un formulario, para que lo llene el usuario
  "last name": "Perez",
  email: "juanperez@gmail.com",
};

const endPurchase = () => {
  const dbCollection = collection(db, DB_COLLECTIONS[1]);
  (async () => {
    try {
      const post = await addDoc(dbCollection, {
        client: clientData,
        items: cart,
        time: serverTimestamp(),
        total: totalPrice,
      });
      console.log("post id response: ", post.id);
      //aca pone el clear del carrito
    } catch (error) {
      setError(true);
      console.log(error);
    }
  })();
};

const Buying = () => {
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
          <Text>Purchse summary</Text>
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
          <ClientForm />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Buying;
