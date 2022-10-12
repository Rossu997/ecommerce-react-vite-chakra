import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Stack } from "@chakra-ui/react";

import NavBar from "./components/header/NavBar";
import Cart from "./components/main/cart/Cart";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import Footer from "./components/footer/Footer";
import { Terminosycondiciones } from "./components/footer/Terminosycondiciones";
import CartProvider from "./context/CartContext";

/*---------------------------------------------------------------------*/

function App() {
  return (
    <BrowserRouter>
      <Stack minHeight="100vh" gap="4rem">
        <CartProvider>
          <NavBar />
          <Container
            maxWidth="8xl"
            display="flex"
            flexDirection="column"
            alignSelf="center"
            alignItems="center"
          >
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />
              <Route
                path="/item/:idProduct"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/legals/terminosycondiciones"
                element={<Terminosycondiciones />}
              />
            </Routes>
          </Container>
        </CartProvider>
        <Footer />
      </Stack>
    </BrowserRouter>
  );
}

export default App;
