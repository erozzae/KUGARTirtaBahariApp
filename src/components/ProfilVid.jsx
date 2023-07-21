import React from "react";
import {  Box, Center, Wrap, Heading } from "@chakra-ui/react";

function ProfilVid() {
  return (
    <Box mt={10} mb={10}>
       <Wrap justify="center" my={5}>
        <Heading>Company Profil</Heading>
      </Wrap>
      <Box>
        <Center px={8}>
          <iframe
            width='600px'
            height='400px'        
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
            alt="naruto"
            objectFit="cover"
          />
        </Center>
      </Box>
    </Box>
  );
}

export default ProfilVid;
