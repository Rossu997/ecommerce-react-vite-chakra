/* IMPORT COMPONENTS */
import { useState, useEffect } from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import ItemDetail from "./ItemDetail";
import axios from "axios";
import { useParams } from "react-router-dom";

/*---------------------------------------------------------------------*/

// Consume solo 1 producto, 1 objeto{}
const ItemDetailContainer = () => {
  /* STATES */
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { idProduct } = useParams();

  /* LOGIC */
  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${idProduct}`).then((res) => {
      setIsLoading(false);
      setProduct(res.data);
    });
  }, []);

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
