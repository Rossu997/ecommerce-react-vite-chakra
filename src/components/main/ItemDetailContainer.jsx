/* IMPORT COMPONENTS */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@chakra-ui/react";

import ItemDetail from "./ItemDetail";
import db from "../../services/db";

/*---------------------------------------------------------------------*/

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { idProduct } = useParams();

  useEffect(() => {
    (async () => {
      setProduct(await db.getSingleProduct(idProduct));
      setIsLoading(false);
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
