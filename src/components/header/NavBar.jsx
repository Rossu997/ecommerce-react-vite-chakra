import { Link } from "react-router-dom";
import { Stack, Container, Box, Heading } from "@chakra-ui/react";

import Nav from "./Nav";
import CartWidget from "./CartWidget";

/*---------------------------------------------------------------------*/

const NavBar = () => {
  return (
    <Box as="header" boxShadow="12px 12px 24px #e6e6e6">
      <Container
        maxWidth="8xl"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        py="5"
      >
        <Link to="/">
          <Heading as="h1" color="brand">
            FRAUS
          </Heading>
        </Link>
        <Stack gap="16" flexDir="row" alignItems="center">
          <Nav />
          <Link to="/cart">
            <CartWidget />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default NavBar;
