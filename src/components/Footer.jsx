import { Stack, Text, Heading, Box, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" mt="20" boxShadow="-12px -12px 24px #e6e6e6">
      <Container maxWidth="8xl" py="5">
        <Stack direction="row" alignItems="baseline">
          <Heading>Fraus©</Heading>
          <Text>All rights reserved</Text>
        </Stack>

        <a href="../assets/terminosycondiciones.html" target="_blank">
          Terms and Conditions
        </a>
      </Container>
    </Box>
  );
};

export default Footer;
