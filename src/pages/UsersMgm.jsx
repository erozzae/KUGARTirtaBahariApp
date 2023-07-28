import { Box } from "@chakra-ui/react";
import React from "react";
import TableUsers from "../components/UserComp/TableUsers";

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
