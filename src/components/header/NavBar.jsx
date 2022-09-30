/* IMPORT DEPENDENCIES */
import { Link } from "react-router-dom";
import { Stack, Image, Container, Box, Heading } from "@chakra-ui/react";

/* IMPORT COMPONENTS */
import CartWidget from "./CartWidget";
import Nav from "./Nav";

/*---------------------------------------------------------------------*/

const NavBar = () => {
  return (
    <Box as="header" marginBottom="20" boxShadow="12px 12px 24px #e6e6e6">
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

/* EXPORT COMPONENTS */
export default NavBar;
