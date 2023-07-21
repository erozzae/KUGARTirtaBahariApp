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
  Flex,
  Heading,
  IconButton,
  Wrap,
  WrapItem,
  HStack,
  Box,
} from "@chakra-ui/react";
import { AiFillDelete, AiFillEdit, AiOutlineRollback } from "react-icons/ai";
import users from "../../assets/css/users.module.css";
import React from "react";
import { Link as ReachLink } from "react-router-dom";
import Navbar from "../Navbar";

function TableUsers() {
  return (
    <Flex justify="center" mt='15px'>
      <Box height="100vh" w="80%">
        <Wrap justify="space-between" mb='20px'>
          <WrapItem>
            <IconButton
              as={ReachLink}
              to="/"
              icon={<AiOutlineRollback />}
            ></IconButton>
            {/* <WrapItem  as={ReachLink} to="/users" icon={<AiOutlineRollback />} ></WrapItem> */}
          </WrapItem>
          <WrapItem>
            <Heading className={users.headingTxt}>Manajemen User</Heading>
          </WrapItem>
        </Wrap>
        <Flex justify="center">
          <TableContainer minWidth="70%" w="200%">
            <Table border="1px" borderColor="gray.200">
              <TableCaption>
                Menu untuk menambah,mengedit, dan menghapus user
              </TableCaption>
              <Thead>
                <Tr>
                  <Th color={"#ffff"}>Nama</Th>
                  <Th color={"#ffff"}>Email</Th>
                  <Th color={"#ffff"}>Aksi</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Toktok</Td>
                  <Td>Toktok@gmail.com</Td>
                  <Td>
                    <HStack spacing={2}>
                      <IconButton
                        variant="outline"
                        size="sm"
                        colorScheme="blue"
                        aria-label="edit"
                        icon={<AiFillEdit />}
                      />
                      <IconButton
                        variant="outline"
                        size="sm"
                        colorScheme="red"
                        aria-label="delete"
                        icon={<AiFillDelete />}
                      />
                    </HStack>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Iul</Td>
                  <Td>Ipul@gmail.com</Td>
                  <Td>
                    <HStack spacing={2}>
                      <IconButton
                        variant="outline"
                        size="sm"
                        colorScheme="blue"
                        aria-label="edit"
                        icon={<AiFillEdit />}
                      />
                      <IconButton
                        variant="outline"
                        size="sm"
                        colorScheme="red"
                        aria-label="delete"
                        icon={<AiFillDelete />}
                      />
                    </HStack>
                  </Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres@gmail.com</Td>
                  <Td>
                    <HStack spacing={2}>
                      <IconButton
                        variant="outline"
                        size="sm"
                        colorScheme="blue"
                        aria-label="edit"
                        icon={<AiFillEdit />}
                      />
                      <IconButton
                        variant="outline"
                        size="sm"
                        colorScheme="red"
                        aria-label="delete"
                        icon={<AiFillDelete />}
                      />
                    </HStack>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th color={"#ffff"}>Nama</Th>
                  <Th color={"#ffff"}>Email</Th>
                  <Th color={"#ffff"}>Aksi</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Flex>
      </Box>
    </Flex>
  );
}

export default TableUsers;
