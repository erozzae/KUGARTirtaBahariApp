import React from "react";
import { Box } from "@chakra-ui/react";

import ArtikelTable from "../components/ArtikelComp/ArtikelTable";

function ArtikelMgm() {
  return (
    <Box maxW="1400px" minW="30vh" w="100%" minH="50vh" maxH="80vh" p={8}>
      {/* <Heading mb={5}>Manajemen User</Heading> */}
      <ArtikelTable />
    </Box>
  );
}

export default ArtikelMgm;
