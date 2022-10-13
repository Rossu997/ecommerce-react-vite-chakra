import { Link as ReachLink } from "react-router-dom";
import {
  Text,
  Heading,
  Box,
  Image,
  Badge,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";

/*---------------------------------------------------------------------*/

const Item = ({ category, id, image, price, title }) => {
  return (
    <Stack
      as="article"
      alignItems="center"
      justifyContent="space-between"
      w="sm"
      p="2rem"
      margin="0 !important"
      bgColor="#fff"
      borderRadius="50px"
      boxShadow="-5px -5px 10px #dddddd, 5px 5px 10px #ffffff"
      transition="all 0.5s"
      _hover={{
        boxShadow: "-15px -15px 30px #dddddd, 15px 15px 30px #ffffff",
      }}
    >
      <Link as={ReachLink} to={`/item/${id}`} mb="1rem">
        <Image src={image} alt={title} h="300px" objectFit="contain" />
      </Link>
      <Box>
        <Link as={ReachLink} to={`/category/${category}`}>
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
        <Stack
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
          borderTopWidth="1px"
          borderTopColor="neutralLight"
          mt="2rem"
          pt="1rem"
          alignItems="baseline"
        >
          <Heading color="primary">{`$${price}`}</Heading>
          <Link as={ReachLink} to={`/item/${id}`} color="neutral">
            See more...
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Item;

{
  /* <Button
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
              ></Button> */
}
