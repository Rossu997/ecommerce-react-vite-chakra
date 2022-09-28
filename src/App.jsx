////////*? rafce */

/* IMPORT COMPONENTS */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import Cart from "./components/Cart.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import { Terminosycondiciones } from "./assets/Terminosycondiciones";

const message = "all our products";

function App() {
  /* RENDER */
  return (
    <BrowserRouter>
      <NavBar />
      <Container
        display="flex"
        alignSelf="center"
        alignItems="center"
        justifyContent="center"
        maxWidth="8xl"
        margin="0 auto"
      >
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greetings={message} />}
          />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer greetings={message} />}
          />
          <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/assets/terminosycondiciones"
            element={<Terminosycondiciones />}
          />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

/* EXPORT COMPONENT */
export default App;
