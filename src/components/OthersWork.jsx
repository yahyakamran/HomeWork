import { LinkIcon, RepeatIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Avatar,
  Tooltip,
  Button,
  Box,
  Link,
} from "@chakra-ui/react";
import { child, get, ref } from "firebase/database";
import { useState } from "react";
import { db } from "../config/firebase-config";

function OthersWork() {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);
  const handleClick = async () => {
    get(child(ref(db), "Users/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const res = snapshot.val();
          setResponse(res);
        } else {
          console.log("Data not available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    setData(Object.entries(response));
  };

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading
          textAlign={"center"}
          color={"gray.700"}
          margin={"14px"}
          fontSize={"22px"}
        >
          Other Students Work
        </Heading>
        <Button colorScheme="teal" variant="ghost" onClick={handleClick}>
          <Tooltip label="Click To Update Others Work" hasArrow fontSize="sm">
            <RepeatIcon />
          </Tooltip>
        </Button>
      </Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>The Work Posted By Other Students</TableCaption>
          <Thead>
            <Tr>
              <Th>Profile</Th>
              <Th>Name</Th>
              <Th>Roll No</Th>
              <Th>Project-Title</Th>
              <Th>Project Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((data) => (
              <Tr key={data[0]}>
                <Td>
                  <Avatar
                    name={data[1]?.user?.name}
                    src={data[1]?.user?.pictureUrl}
                  />
                </Td>
                <Td>{data[1]?.user?.name}</Td>
                <Td>{data[0]}</Td>
                <Td>
                  {!data[1]?.task?.title
                    ? "No Project Submitted"
                    : data[1]?.task?.title}
                </Td>
                <Td cursor={"pointer"}>
                  <Link
                    href={
                      !data[1]?.task?.link
                        ? "https://st2.depositphotos.com/9987990/44750/v/1600/depositphotos_447504476-stock-illustration-no-code-banner-vector-concept.jpg"
                        : data[1]?.task?.link
                    }
                    target="blank"
                  >
                    <LinkIcon />
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default OthersWork;
