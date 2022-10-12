import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Stack, Text } from "@chakra-ui/react";

import { DB_CATEGORIES } from "../../firebase/firebase";

/*---------------------------------------------------------------------*/

const Nav = () => {
  const [categories, setCategories] = useState([]);

  //Saqué el fetch de las categorías para el navbar porque me parece que es algo que no cambia muy a menudo y es innecesario que esté haciendo peticiones al db todo el tiempo.

  useEffect(() => {
    setCategories(DB_CATEGORIES);
  }, []);

  /* useEffect(() => {
    (async () => {
      setCategories(await api.getAllCategories());
    })();
  }, []); */

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
