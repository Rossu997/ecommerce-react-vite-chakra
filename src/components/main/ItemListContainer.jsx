import { useState, useEffect } from "react";
import { CircularProgress, Heading, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import api from "../../services/api";

/*---------------------------------------------------------------------*/

const greetings = "all our products";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
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

  // Se podría hacer una carga parcial de productos en el home
  // 'https://fakestoreapi.com/products?limit=5'
  // Y luego llamar un componente con un botón "cargar más"
  // Tambien en vez de un spinner usar cards en gris como placeholders

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

  return (
    <Stack as="main" justifyContent="center" gap="10">
      <Heading
        as="h2"
        size="4xl"
        textAlign="center"
        fontFamily="heading"
        color="primary"
      >
        {categoryName ? categoryName : greetings}
      </Heading>
      <ItemList products={listProducts} />
    </Stack>
  );
};

export default ItemListContainer;
