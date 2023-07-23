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
import Footer from "../components/Footer";
import petambak2 from "../assets/img/petambak2.jpg";
import { AiOutlineRollback } from "react-icons/ai";
import { Link as ReachLink } from "react-router-dom";
import main from "../assets/css/main.module.css";
import React from "react";

function ArtikelsAll() {
  let data = [
    {
      id: 1,
      title: "Kuliner Kesukaan Der Führer1",
      img: petambak2,
      contSnpt:
        " blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa",
    },
    {
      id: 2,
      title: "Judul dummy",
      img: pahlawan,
      contSnpt:
        " blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa",
    },
  ];

  return (
    <Box>
      <Flex justify="space-around" align="center" mt={5} mb={10}>
        <IconButton
          as={ReachLink}
          to="/"
          icon={<AiOutlineRollback />}
        ></IconButton>
        <Heading>Semua Artikel</Heading>
      </Flex>
      <Box px={5}>
        {data.map((item, index) => {
          return (
            <Box mb={5}>
              <HStack justify="center" align="flex-start">
                <Box>
                  <Image
                    //  boxSize='500px'
                    w="200px"
                    h="100px"
                    objectFit="cover"
                    src={item.img}
                    alt="Img"
                    borderRadius="lg"
                    className={main.pictArtikel}
                  ></Image>
                </Box>
                <Box maxW={["60%"]}>
                  <Heading pl={5} size="md" className={main.headingProduk}>
                    <Link as={ReachLink} to={`/artikel/${item.id}`}>
                      {item.title}
                    </Link>
                  </Heading>
                  <Text pl={5} fontSize={["sm", "md"]}>
                    {/* Penggemar daging dan hidangan tradisional Austria, Hitler
                    berubah jadi vegetarian jelang perang.{" "} */}
                    {item.contSnpt}
                  </Text>
                </Box>
              </HStack>
            </Box>
          );
        })}
        {/* <Box mb={3}>
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
        </Box> */}

        {/* <Box mb={3}>
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
        </Box> */}
      </Box>
      <Box position="fixed" bottom={0} width="100%">
        <Footer />
      </Box>
    </Box>
  );
}

export default ArtikelsAll;
