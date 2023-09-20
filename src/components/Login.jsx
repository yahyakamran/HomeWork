import React, { useEffect, useState } from "react";
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
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate } from "react-router-dom";

function login() {
  const [show, setShow] = useState();
  const [email, setEmail] = useState();
  const [rollNo, setRollNo] = useState();
  const [password, setPassword] = useState();
  const [fetchedPassword, setFetchedPassword] = useState();
  const [fetchedEmail, setFetchedEmail] = useState();
  const toast = useToast();
  const database = getDatabase();
  const navigate = useNavigate();

  const handleClick = () => {
    setShow(!show);
  };

  const handleFetchData = async () => {
    get(child(ref(database), "Users/" + rollNo))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const res = snapshot.val();
          setFetchedEmail(res.user.email);
          setFetchedPassword(res.user.password);
        } else {
          console.log("Data not available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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

    if (fetchedEmail === email || fetchedPassword === password) {
      toast({
        title: "Login Successfull",
        status: "success",
        duration: "5000",
        isClosable: true,
        position: "bottom",
      });
      navigate("/homepage");
    }
  };
  return (
    <VStack spacing={"5px"}>
      <FormControl id="rollno" isRequired>
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
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="password" isRequired>
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
