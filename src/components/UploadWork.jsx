import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { db } from "../config/firebase-config";
import { ref, set } from "firebase/database";

function UploadWork() {
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(false);
  const [rollNo, setRollNo] = useState();
  const [projectLink, setProjectLink] = useState();
  const toast = useToast();

  useEffect(() => {
    setRollNo(localStorage.getItem("rollNo"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!title || !projectLink) {
      toast({
        title: "Please Fill All Fields",
        status: "warning",
        duration: "5000",
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    const data = {
      task: {
        title: title,
        link: projectLink,
      },
    };

    set(ref(db, "Uploads/" + rollNo), data)
      .then(() => {
        toast({
          title: "Progect Uploaded Succesfull",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      })
      .catch((error) => {
        toast({
          title: "Error Occured!",
          description: error,
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      });
  };

  return (
    <>
      <Heading
        textAlign={"center"}
        color={"gray.700"}
        margin={"14px"}
        fontSize={"22px"}
      >
        Uploud Your Assignment
      </Heading>
      <FormControl padding={"12px"}>
        <FormLabel>Project-Title</FormLabel>
        <Input onChange={(e) => setTitle(e.target.value)} />
        <FormHelperText>Make it brief and descriptive.</FormHelperText>
      </FormControl>
      <FormControl padding={"12px"}>
        <FormLabel>Project-link</FormLabel>
        <Input onChange={(e) => setProjectLink(e.target.value)} />
      </FormControl>
      <Box padding={"12px"}>
        <Button size={"lg"} onClick={handleSubmit} isLoading={loading}>
          Submit
        </Button>
      </Box>
    </>
  );
}

export default UploadWork;
