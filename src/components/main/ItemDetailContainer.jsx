/* IMPORT COMPONENTS */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@chakra-ui/react";
import axios from "axios";

import ItemDetail from "./ItemDetail";
import api from "../../services/api";

/*---------------------------------------------------------------------*/

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { idProduct } = useParams();

  /*  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${idProduct}`).then((res) => {
      setIsLoading(false);
      setProduct(res.data);
    });
  }, []); */

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      setProduct(await api.getSingleProduct(idProduct));
      setIsLoading(false);
    })();
  }, [idProduct]);

  function getRandomStock() {
    return Math.floor(Math.random() * 10);
  }

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

  return <ItemDetail {...product} stock={getRandomStock()} />;
};

export default ItemDetailContainer;
