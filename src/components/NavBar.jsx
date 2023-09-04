import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../assets/logo/book.png";

function NavBar() {
  return (
    <>
      <Box
        display={"flex"}
        width={"100%"}
        height={"10vh"}
        alignItems={"center"}
      >
        <Image src={logo} />
        <Box fontSize={"24px"}>HomeWork</Box>
      </Box>
    </>
  );
}

export default NavBar;
