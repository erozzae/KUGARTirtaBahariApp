import {
  Box,
  Flex,
  IconButton,
  Heading,
  Text,
  Image,
  HStack,
  Link,
} from "@chakra-ui/react";
import gula from "../assets/img/gula.jpg";
import pahlawan from "../assets/img/pahawan.jpg";
import petambak2 from "../assets/img/petambak2.jpg";
import { AiOutlineRollback } from "react-icons/ai";
import { Link as ReachLink } from "react-router-dom";
import main from "../assets/css/main.module.css";
import React from "react";

function ArtikelsAll() {
  return (
    <Box>
      <Flex justify="space-around" align="center" my={5}>
        <IconButton
          as={ReachLink}
          to="/"
          icon={<AiOutlineRollback />}
        ></IconButton>
        <Heading>Semua Artikel</Heading>
      </Flex>
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
      </Box>
    </Box>
  );
}

export default ArtikelsAll;
