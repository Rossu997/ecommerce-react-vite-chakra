import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";

import NavBar from "./components/header/NavBar";
import Cart from "./components/main/Cart";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import Footer from "./components/footer/Footer";
import { Terminosycondiciones } from "./components/footer/Terminosycondiciones";

/*---------------------------------------------------------------------*/

function App() {
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
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/legals/terminosycondiciones"
            element={<Terminosycondiciones />}
          />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
