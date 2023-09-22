import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AppState } from "../context/AppProvider";

function login() {
  const { rollNo, setRollNo, fetchedPassword, fetchedEmail, handleFetchData } =
    AppState();

  const [show, setShow] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => {
    setShow(!show);
  };

  const handleSubmit = async () => {
    if (!email || !password || !rollNo) {
      toast({
        title: "Please Fill All Fields",
        status: "warning",
        duration: "5000",
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (fetchedEmail === email && fetchedPassword === password) {
      toast({
        title: "Login Successfull",
        status: "success",
        duration: "5000",
        isClosable: true,
        position: "bottom",
      });
      navigate("/homepage");
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter correct credientials",
        status: "error",
        duration: "5000",
        isClosable: true,
        position: "bottom",
      });
    }
  };
  return (
    <VStack spacing={"5px"}>
      <FormControl id="Rollno" isRequired>
        <FormLabel>Roll No</FormLabel>
        <InputGroup>
          <Input
            placeholder="First enter Your Roll No and press done"
            onChange={(e) => setRollNo(e.target.value)}
          ></Input>
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={handleFetchData}>
              done
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="Email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="Password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="gray"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
      >
        Log In
      </Button>
    </VStack>
  );
}

export default login;
