import { Box, Heading } from "@chakra-ui/react";
import React from "react";

function LatestWork() {
  return (
    <>
      <Heading
        Align={"center"}
        color={"gray.700"}
        margin={"14px"}
        fontSize={"22px"}
      >
        Latest Assignment
      </Heading>
      <Box>
        <Heading
          textAlign={"center"}
          color={"gray.700"}
          margin={"8px"}
          fontSize={"18px"}
        >
          Topic : Function
        </Heading>

        <Box padding={"8px"}>
          Task No 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet consectetur rem dolore optio sequi quo quos beatae ducimus
          perspiciatis omnis?
        </Box>
      </Box>
    </>
  );
}

export default LatestWork;
