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
import grSpa from "../assets/img/AnalisisGaramSpa.jpeg";
import petambak2 from "../assets/img/petambak2.jpg";
import materiKebijakan from "../assets/img/materi-naskah-kebijakan.jpeg";

function Artikel() {
  let data = [
    {
      id: 1,
      title:
        "STRATEGI PENGEMBANGAN POTENSI TAMBAK GARAM KOPERASI PRODUSEN GARAM TIRTA BAHARI",
      img: grSpa,
      contSnpt:
        " blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa",
      pdf: "https://drive.google.com/file/d/10AJHdfDDf0NJvh31LYK2yu5yVqRdQRpF/preview",
    },
    {
      id: 2,
      title:
        "STRATEGI PENGEMBANGAN POTENSI TAMBAK GARAM KOPERASI PRODUSEN GARAM TIRTA BAHARI",
      img: materiKebijakan,
      contSnpt:
        " Secara spesifik, garam merupakan komoditas pertanian yang memiliki peran penting dalamkehidupan sehari-hari masyarakat. Kebutuhan garam di Indonesia dari tahun ke tahun semakin meningkat seiring dengan bertambahnya penduduk dan berkembangnya industri di Indonesia.",
        pdf:"https://drive.google.com/file/d/1-x8nblK7n3etLC_D3R1nc2ZkTcpBAOn3/preview"
    },
  ];

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
        {data.map((item,index) => {
          return(
            <Box mb={3}>
            <HStack justify="center">
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
              <Box w="55%">
                <Heading
                  pl={5}
                  size={["sm", "md"]}
                  className={main.headingProduk}
                >
                  <Link as={ReachLink} to={`/artikel/${item.id}`}>
                    {/* STRATEGI PENGEMBANGAN POTENSI TAMBAK GARAM KOPERASI PRODUSEN
                    GARAM TIRTA BAHARI */}
                    {item.title}
                  </Link>
                </Heading>
                <Text pl={5}>
                  {/* Penggemar daging dan hidangan tradisional Austria, Hitler
                  berubah jadi vegetarian jelang perang.{" "} */}
                  {item.contSnpt}
                </Text>
              </Box>
            </HStack>
          </Box>
          )
        })}
      
        {/* <Box mb={3}>
          <HStack justify="center">
            <Box>
              <Image
                //  boxSize='500px'
                w="200px"
                h="100px"
                objectFit="cover"
                src={grSpa}
                alt="Img"
                borderRadius="lg"
                className={main.pictArtikel}
              ></Image>
            </Box>
            <Box w="55%">
              <Heading
                pl={5}
                size={["sm", "md"]}
                className={main.headingProduk}
              >
                <Link as={ReachLink} >
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
        <Box>
          <HStack justify="center">
            <IconButton
              as={ReachLink}
              variant="outline"
              colorScheme="teal"
              aria-label="all"
              icon={<AiOutlineFastForward />}
              to="/artikelsAll"
            />
          </HStack>
        </Box>
      </Box>
    </>
  );
}

export default Artikel;
