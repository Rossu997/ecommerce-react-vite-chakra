import { useState, useEffect } from "react";
import { CircularProgress, Heading, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";

import ItemList from "./ItemList";
import { db, DB_COLLECTIONS } from "../../firebase/firebase";

/*---------------------------------------------------------------------*/

const greetings = "all our products";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const dbCollection = collection(db, DB_COLLECTIONS[0]);
    let toGet = dbCollection;
    if (categoryName) {
      toGet = query(dbCollection, where("category", "==", categoryName));
    }

    (async () => {
      try {
        const data = await getDocs(toGet);
        const dbListProducts = data.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        setListProducts(dbListProducts);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [categoryName]);

  /* useEffect(() => {
    setIsLoading(true);
    (async () => {
      if (categoryName) {
        setListProducts(await api.getProductsByCategory(categoryName));
        setIsLoading(false);
        return;
      }
      setListProducts(await api.getAllProducts());
      setIsLoading(false);
    })();
  }, [categoryName]);
   */

  if (isLoading) {
    return (
      <CircularProgress
        isIndeterminate
        color="brand"
        size="20vw"
        height="100%"
      />
    );
  }

  return (
    <Stack as="main" justifyContent="center">
      <Heading
        as="h2"
        size="4xl"
        textAlign="center"
        fontFamily="heading"
        color="primary"
        mb="4rem"
      >
        {categoryName ? categoryName : greetings}
      </Heading>
      <ItemList products={listProducts} />
    </Stack>
  );
};

export default ItemListContainer;
