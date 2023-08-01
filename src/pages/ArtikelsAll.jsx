import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { Link as ReachLink } from "react-router-dom";
import main from "../assets/css/main.module.css";
import pahlawan from "../assets/img/pahawan.jpg";
import petambak2 from "../assets/img/petambak2.jpg";
import materiKebijakan from "../assets/img/materi-naskah-kebijakan.jpeg";
import Footer from "../components/Footer";

function ArtikelsAll() {
  let data = [
    {
      id: 1,
      title:
        "STRATEGI PENGEMBANGAN POTENSI TAMBAK GARAM KOPERASI PRODUSEN GARAM TIRTA BAHARI",
      img: materiKebijakan,
      contSnpt:
        " blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa",
    },
    {
      id: 2,
      title: "Judul dummy",
      img: petambak2,
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
                    objectFit="contain"
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
                    {item.contSnpt}
                  </Text>
                </Box>
              </HStack>
            </Box>
          );
        })}
      </Box>
      <Box
        position="fixed"
        left={0}
        bottom={0}
        width={["0%", "100%"]}
        // h={["0%", "40%", "auto"]}
      >
        <Footer />
      </Box>
    </Box>
  );
}

export default ArtikelsAll;
