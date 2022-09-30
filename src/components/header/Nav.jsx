import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Stack, Text } from "@chakra-ui/react";

import api from "../../services/api";

/*---------------------------------------------------------------------*/

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      setCategories(await api.getAllCategories());
    })();
  }, []);

  return (
    <Stack as="nav" flexDir="row" gap="7" alignItems="baseline">
      {categories.map((category, i) => (
        <NavLink key={i} to={`/category/${category}`}>
          <Text
            fontFamily="text"
            textTransform="uppercase"
            letterSpacing="1px"
            color="black"
            px="1"
          >
            {category}
          </Text>
        </NavLink>
      ))}
    </Stack>
  );
};

export default Nav;
