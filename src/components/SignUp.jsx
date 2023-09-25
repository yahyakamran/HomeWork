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
import { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../config/firebase-config";

function SignUp() {
  const [user, setUser] = useState();
  const [show, setShow] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rollNo, setRollNo] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState();
  const toast = useToast();

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: Button,
      });
      setLoading(false);
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();

      data.append("file", pics);
      data.append("upload_preset", "MERN-chat");

      fetch("https://api.cloudinary.com/v1_1/dp0dbmthd/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: Button,
      });
      setLoading(false);
    }
  };

  const handleClick = () => {
    setShow(!show);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !password || !confirmPassword || !rollNo) {
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
    if (password !== confirmPassword) {
      toast({
        title: "Passwords Don't Match",
        status: "warning",
        duration: "5000",
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    const data = {
      user: {
        name: name,
        email: email,
        password: password,
        pictureUrl: pic,
        rollNo: rollNo,
      },
      task: {
        title: "",
        link: "",
      },
    };

    set(ref(db, "Users/" + rollNo), data)
      .then(() => {
        toast({
          title: "Registration Successfull",
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
    <VStack spacing={"5px"}>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></Input>
      </FormControl>
      <FormControl id="Roll-No" isRequired>
        <FormLabel>Roll No.</FormLabel>
        <Input
          placeholder="Enter Your Roll Number"
          onChange={(e) => setRollNo(e.target.value)}
        ></Input>
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
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Input>
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload Your Picure</FormLabel>
        <Input
          type="file"
          accept="image/*"
          p={1.5}
          onChange={(e) => postDetails(e.target.files[0])}
        ></Input>
      </FormControl>
      <Button
        isLoading={loading}
        onClick={submitHandler}
        colorScheme="gray"
        width={"100%"}
        style={{ marginTop: 15 }}
      >
        Sign Up
      </Button>
    </VStack>
  );
}

export default SignUp;
