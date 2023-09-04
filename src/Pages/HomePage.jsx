import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

import OthersWork from "../components/OthersWork";
import YourWork from "../components/YourWork";

function HomePage() {
  return (
    <>
      <NavBar />;
      <Box
        display={"flex"}
        flexDirection={"row"}
        padding={"20px"}
        justifyContent={"space-around"}
        alignItems={"center"}
        height={"90vh"}
      >
        <Box height={"100%"} border={"1px solid black"} width={"100%"}>
          <OthersWork />
        </Box>
        <Box height={"100%"} border={"1px solid black"} width={"100%"}>
          <YourWork />
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
