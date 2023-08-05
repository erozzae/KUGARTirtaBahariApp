import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import IframeResizer from "iframe-resizer-react";
import React from "react";
import materiKebijakan from "../../assets/img/materi-naskah-kebijakan.jpeg";
import grSpa from "../../assets/img/spa.jpg";
import { AiOutlineRollback } from "react-icons/ai";
import { Link as ReachLink, useParams } from "react-router-dom";

function Konten() {
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
  ];
  const Contentid = useParams();
  const resultId = Contentid.id;
  const result = data.find(({ id }) => id == resultId);
  console.log(result);
  return (
    <Box>
      <Flex justify="space-around" align="center" my={5}>
        <IconButton
          as={ReachLink}
          to="/artikelsAll"
          icon={<AiOutlineRollback />}
        ></IconButton>
        <Heading>Artikel</Heading>
      </Flex>
      <Flex justify="center" mb={5}>
        <Box p={5}>
          <Heading size={['sm','md']} pb={5}>
            {result.title}
          </Heading>
          <text>{result.contSnpt}</text>
        </Box>
      </Flex>
      <IframeResizer
        log
        src={result.pdf}
        allow="autoplay"
        style={{ width: "1px", minWidth: "100%", minHeight: "100vh" }}
      />
    </Box>
  );
}

export default Konten;
