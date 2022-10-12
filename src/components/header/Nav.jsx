import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Stack, Text } from "@chakra-ui/react";
import { getDocs, collection } from "firebase/firestore";

import { db, DB_COLLECTIONS } from "../../firebase/firebase";

/*---------------------------------------------------------------------*/

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const dbCollection = collection(db, DB_COLLECTIONS[2]);

    (async () => {
      try {
        const data = await getDocs(dbCollection);
        const dbCategories = data.docs.map((category) => {
          return category.data().name;
        });
        setCategories(dbCategories);
      } catch (error) {
        setError(true);
        console.log(error);
      }
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
