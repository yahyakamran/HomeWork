import { Box, Button, Heading, Tooltip } from "@chakra-ui/react";
import { ref, child, get } from "firebase/database";
import React, { useState } from "react";
import { db } from "../config/firebase-config";
import { ArrowForwardIcon, RepeatIcon } from "@chakra-ui/icons";

function LatestWork() {
  const [topic, setTopic] = useState("Refresh To Update Task");
  const [task, setTask] = useState("Refresh To Update Task");

  const handleFetchData = async () => {
    get(child(ref(db), "Tasks/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const res = snapshot.val();
          setTopic(res.Topic);
          setTask(res.TaskNo1);
        } else {
          console.log("Data not available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading color={"gray.700"} margin={"14px"} fontSize={"22px"}>
          Latest Assignment
        </Heading>
        <Button colorScheme="teal" variant="ghost" onClick={handleFetchData}>
          <Tooltip label="Click To Refresh Tasks" hasArrow fontSize="sm">
            <RepeatIcon />
          </Tooltip>
        </Button>
      </Box>

      <Box>
        <Heading
          textAlign={"left"}
          color={"gray.700"}
          margin={"8px"}
          fontSize={"18px"}
        >
          {`Topic : ${topic}`}
        </Heading>

        <Box padding={"8px"}>{`Task No 1 : ${task}`}</Box>
      </Box>

      <Box>
        <a href="https://onecompiler.com/c" target="blank">
          <Button
            size="lg"
            rightIcon={<ArrowForwardIcon />}
            colorScheme="gray"
            variant="outline"
          >
            Code It!
          </Button>
        </a>
      </Box>
    </>
  );
}

export default LatestWork;
