import {
  Box,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineFastForward } from "react-icons/ai";
import { Link as ReachLink } from "react-router-dom";
import main from "../assets/css/main.module.css";
import gula from "../assets/img/gula.jpg";
import pahlawan from "../assets/img/pahawan.jpg";
import petambak2 from "../assets/img/petambak2.jpg";

function Artikel() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Image
          // justifyItems="center"
          src={petambak2}
          maxW="890px"
          w="500px"
          my={8}
          className={main.containerArtikel}
        ></Image>
      </Box>
      <Wrap justify="center" my={5}>
        <Heading>Artikel</Heading>
      </Wrap>
      <Box px={5}>
        <Box mb={3}>
          <HStack justify="center">
            <Box>
              <Image
                //  boxSize='500px'
                w="200px"
                h="100px"
                objectFit="cover"
                src={gula}
                alt="Img"
                borderRadius="lg"
                className={main.pictArtikel}
              ></Image>
            </Box>
            <Box>
              <Heading pl={5} size="md" className={main.headingProduk}>
                <Link>Kuliner Kesukaan Der Führer</Link>
              </Heading>
              <Text pl={5}>
                Penggemar daging dan hidangan tradisional Austria, Hitler
                berubah jadi vegetarian jelang perang.{" "}
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box mb={3}>
          <HStack justify="center">
            <Box>
              <Image
                //  boxSize='500px'
                w="200px"
                h="100px"
                objectFit="cover"
                src={pahlawan}
                alt="Img"
                borderRadius="lg"
                className={main.pictArtikel}
              ></Image>
            </Box>
            <Box>
              <Heading pl={5} size="md" className={main.headingProduk}>
                <Link as={ReachLink} to="/artikel">
                  Kuliner Kesukaan Der Führer
                </Link>
              </Heading>
              <Text pl={5}>
                Penggemar daging dan hidangan tradisional Austria, Hitler
                berubah jadi vegetarian jelang perang.{" "}
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box>
          <HStack justify="center">
            <IconButton
              as={ReachLink}
              variant="outline"
              colorScheme="teal"
              aria-label="all"
              icon={<AiOutlineFastForward />}
              to='/artikelsAll'
            />
          </HStack>
        </Box>
      </Box>
    </>
  );
}

export default Artikel;
