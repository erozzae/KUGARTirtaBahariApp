import {
  Box,
  Card,
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
import bg from "../assets/img/bgPattern.jpg";
import materiKebijakan from "../assets/img/materi-naskah-kebijakan.jpeg";
import grSpa from "../assets/img/AnalisisGaramSpa.jpeg";
import thumb3 from "../assets/img/AnalisisPasarGaramFortifikasi.png";
import thumb4 from "../assets/img/pemanfaatanLimbahGaram.jpeg";
import Footer from "../components/Footer";

function ArtikelsAll() {
  let data = [
    {
      id: 1,
      title: "Analisis Garam Spa dan Variannya",
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
        " Secara spesifik, garam merupakan komoditas pertanian yang memiliki peran penting dalam kehidupan sehari-hari masyarakat. Kebutuhan garam di Indonesia dari tahun ke tahun semakin meningkat seiring dengan bertambahnya penduduk dan berkembangnya industri di Indonesia.",
      pdf: "https://drive.google.com/file/d/1-x8nblK7n3etLC_D3R1nc2ZkTcpBAOn3/preview",
    },
    {
      id: 3,
      title: "Analisis Pasar Garam Fortifikasi",
      img: thumb3,
      contSnpt:
        " Garam fortifikasi merupakan penambahan zat atau bahan tertentu untuk meningkatkan gizi dan mutu akhir dari produk garam konsumsi. Analisis pasar pada produk garam fortifikasi dilakukan untuk mengetahui ketertarikan dan kebutuhan pasar dari produk garam fortifikasi.",
      pdf: "https://drive.google.com/file/d/13hoYN8zAU73-nS_YnCZtRXIR459D7VZA/preview",
    },
    {
      id: 4,
      title: "Pemanfaatan Limbah Garam Dalam Berbagai Bidang",
      img: thumb4,
      contSnpt:
        " Limbah dalam produksi garam sendiri meliputi limbah padat dan limbah cair. Limbah padat meliputi blotong, ceceran garam serta garam gosong dan pecah sedangkan untuk limbah cair berupa bittern. Limbah-limbah tersebut memiliki berbagai manfaat dalam berbagai bidang.",
      pdf: "https://drive.google.com/file/d/1nEYC_XWzUopPDNUKCmwWT5Lz9tmDUzBU/preview",
    },
  ];

  return (
    <Box
      backgroundImage={bg}
      backgroundPosition="center"
      backgroundRepeat="repeat"
      w="100%"
      h="100%"
    >
      <Flex justify="space-around" align="center" pt={5} mb="8vh">
        <IconButton
          as={ReachLink}
          to="/"
          icon={<AiOutlineRollback />}
        ></IconButton>
        <Heading>Semua Artikel</Heading>
      </Flex>
      <Flex flexDirection="column" justify="space-between" minH="100vh">
        <Box px={5}>
          {data.map((item, index) => {
            return (
              <Box mb={1}>
                <Card p={5}>
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
                </Card>
              </Box>
            );
          })}
        </Box>
        <Box
          // position="fixed"
          left={0}
          bottom={0}
          width={["0%", "100%"]}
          // h={["0%", "40%", "auto"]}
        >
          <Footer />
        </Box>
      </Flex>
    </Box>
  );
}

export default ArtikelsAll;
