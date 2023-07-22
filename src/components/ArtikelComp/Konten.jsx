import React from "react";
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import art from "../../assets/css/artikel.module.css";
import { AiOutlineRollback } from "react-icons/ai";
import { Link as ReachLink } from "react-router-dom";
import IframeResizer from "iframe-resizer-react";

function Konten() {
  return (
    <Box>
      <Flex justify="space-around" align="center" my={5}>
        <IconButton
          as={ReachLink}
          to="/"
          icon={<AiOutlineRollback />}
        ></IconButton>
        <Heading>Artikel</Heading>
      </Flex>
      <IframeResizer
        log
        src="https://drive.google.com/file/d/1WRORtTrhhqk7-lS9DuYE0kYBPsw-tvw3/preview"
        allow="autoplay"
        style={{ width: "1px", minWidth: "100%", minHeight: "100vh" }}
      />
    </Box>
  );
}

export default Konten;
