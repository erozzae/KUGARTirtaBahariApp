import { Box, Center, Heading, Wrap } from "@chakra-ui/react";
import React from "react";

function Maps() {
  return (
    <Box mt={10} >
      <Wrap justify="center" my={5}>
        <Heading>Lokasi</Heading>
      </Wrap>
      <Center px={8}>
        {/* <AspectRatio ratio={16 / 9} maxHeight="30%"> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3949.653961703002!2d110.565996!3d-8.136666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bbaf4d43a504d%3A0xec67e4a2048c2008!2sPantai%20Sepanjang!5e0!3m2!1sid!2sus!4v1690116788284!5m2!1sid!2sus"
          width="600px"
          height="400px"
        />
        {/* </AspectRatio> */}
      </Center>
    </Box>
  );
}

export default Maps;
