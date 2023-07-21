import { Heading } from "@chakra-ui/react";
import { Wrap, WrapItem, Box } from "@chakra-ui/react";
import TableUsers from "../components/UserComp/TableUsers";
import React from "react";

function Users() {
  return (
      <Box
        maxW="1400px"
        minW="30vh"
        w="100%"
        minH="50vh"
        maxH="80vh"
        p={8}
      >
        {/* <Heading mb={5}>Manajemen User</Heading> */}
        <TableUsers />
      </Box>
   
  );
}

export default Users;
