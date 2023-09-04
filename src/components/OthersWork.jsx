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
} from "@chakra-ui/react";

function OthersWork() {
  return (
    <>
      <Heading
        textAlign={"center"}
        color={"gray.700"}
        margin={"14px"}
        fontSize={"22px"}
      >
        Other Students Work
      </Heading>
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
            <Tr>
              <Td>Pic</Td>
              <Td>Ali Hassan</Td>
              <Td>5694</Td>
              <Td>For-Loop</Td>
              <Td cursor={"pointer"}>CheckOut</Td>
            </Tr>
            <Tr>
              <Td>Pic</Td>
              <Td>Abdullah</Td>
              <Td>5694</Td>
              <Td>For-Loop</Td>
              <Td cursor={"pointer"}>CheckOut</Td>
            </Tr>
            <Tr>
              <Td>Pic</Td>
              <Td>Hassan</Td>
              <Td>5694</Td>
              <Td>For-Loop</Td>
              <Td cursor={"pointer"}>CheckOut</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Profile</Th>
              <Th>Name</Th>
              <Th>Roll No</Th>
              <Th>Project-Title</Th>
              <Th>Project Link</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

export default OthersWork;
