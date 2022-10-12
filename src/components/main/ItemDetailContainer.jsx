/* IMPORT COMPONENTS */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@chakra-ui/react";
import { doc, getDoc, collection } from "firebase/firestore";

import ItemDetail from "./ItemDetail";
import { db, DB_COLLECTIONS } from "../../firebase/firebase";

/*---------------------------------------------------------------------*/

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { idProduct } = useParams();

  useEffect(() => {
    const dbCollection = collection(db, DB_COLLECTIONS[0]);
    const dbDoc = doc(dbCollection, idProduct);

    (async () => {
      try {
        const data = await getDoc(dbDoc);
        setProduct({
          id: data.id,
          ...data.data(),
        });
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [idProduct]);

  if (isLoading) {
    return (
      <CircularProgress
        isIndeterminate
        color="brand"
        size="20vw"
        height="100vh"
      />
    );
  }

  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;
