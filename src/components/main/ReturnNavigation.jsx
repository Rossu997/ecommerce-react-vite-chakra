import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

/*---------------------------------------------------------------------*/

const ReturnNavigation = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(-1)}
      leftIcon={<ArrowBackOutlinedIcon />}
      bgColor="white"
      w="fit-content"
    >
      Go back
    </Button>
  );
};

export default ReturnNavigation;
