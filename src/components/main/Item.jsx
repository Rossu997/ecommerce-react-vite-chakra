import { Link } from "react-router-dom";
import {
  Text,
  Heading,
  Box,
  Image,
  Badge,
  Stack,
  Button,
} from "@chakra-ui/react";

/*---------------------------------------------------------------------*/

const Item = ({ category, id, image, price, title }) => {
  return (
    <Stack
      as="article"
      w="sm"
      h="700px"
      borderRadius="50px"
      justifyContent="space-between"
      bgColor="#fff"
      px="40px"
      pt="10"
      pb="6"
      margin="0 !important"
      boxShadow="-10px -10px 30px #e6e6e6, 10px 10px 30px #ffffff"
      _hover={{}}
    >
      <Stack alignItems="center" gap="4">
        <Link to={`/item/${id}`}>
          <Image src={image} alt={title} h="300px" objectFit="contain" />
        </Link>
        <Box>
          <Link to={`/category/${category}`}>
            <Badge
              bgColor="secondary"
              color="white"
              letterSpacing="2px"
              borderRadius="full"
              px="4"
              py="1"
            >
              {category}
            </Badge>
          </Link>
          <Heading
            as="h3"
            color="black"
            mt="3"
            fontSize={title.length > 40 ? "1rem" : "1.5rem"}
          >
            {title}
          </Heading>
          <Box width="100%">
            <Heading
              color="primary"
              borderTopWidth="1px"
              borderTopColor="neutralLight"
              pt="3"
              mt="6"
            >
              {`$${price}`}
            </Heading>
          </Box>
        </Box>
      </Stack>
      <Box>
        <Link to={`/item/${id}`}>
          <Button
            bgColor="white"
            borderRadius="20"
            borderWidth="1px"
            borderColor="neutralLight"
            py="6"
            px="8"
            color="neutral"
            fontFamily="text"
            fontWeight="200"
            fontSize="1rem"
            letterSpacing="2px"
            textTransform="uppercase"
            width="xs"
            textAlign="center"
          >
            See more...
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default Item;
