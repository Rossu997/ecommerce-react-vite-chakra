import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const ReturnHome = () => {
  return (
    <Link to="/">
      <Button>Return to Home</Button>
    </Link>
  );
};

export default ReturnHome;
