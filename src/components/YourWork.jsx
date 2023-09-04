import UploadWork from "./UploadWork";
import LatestWork from "./LatestWork";
import { Box } from "@chakra-ui/react";

function YourWork() {
  return (
    <>
      <Box>
        <Box borderBottom={"1px solid black"} paddingBottom={"18px"}>
          <UploadWork />
        </Box>
        <LatestWork />
      </Box>
    </>
  );
}

export default YourWork;
