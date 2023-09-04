import React from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

function UploadWork() {
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
        <Input />
        <FormHelperText>Make it brief and descriptive.</FormHelperText>
      </FormControl>
      <FormControl padding={"12px"}>
        <FormLabel>Project-Repel-link</FormLabel>
        <Input />
      </FormControl>
    </>
  );
}

export default UploadWork;
