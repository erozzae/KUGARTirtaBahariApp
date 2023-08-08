import { Box, Center, Heading, Wrap } from "@chakra-ui/react";
import React from "react";

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
            src="https://www.youtube.com/embed/WOlTe475smQ"
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
