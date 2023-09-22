import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";

import OthersWork from "../components/OthersWork";
import UploadWork from "../components/UploadWork";
import LatestWork from "../components/LatestWork";

function HomePage() {
  return (
    <>
      <NavBar />;
      <Container maxW="xxl" centerContent margin={"0px"} height={"90vh"}>
        <Box
          bg={"white"}
          w={"100%"}
          h={"80vh"}
          p={4}
          borderRadius={"lg"}
          borderWidth={"1px"}
          color={"black"}
        >
          <Tabs variant="line" colorScheme="gray">
            <TabList>
              <Tab width={"50%"}>Others Work</Tab>
              <Tab width={"50%"}>Upload Your Work</Tab>
              <Tab width={"50%"}>Todays Task</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <OthersWork />
              </TabPanel>
              <TabPanel>
                <UploadWork />
              </TabPanel>
              <TabPanel>
                <LatestWork />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
}

export default HomePage;
