import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import IframeResizer from "iframe-resizer-react";
import React from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { Link as ReachLink, useParams } from "react-router-dom";

function Konten() {
  let data = [
    {
      id: 1,
      title: "Kuliner Kesukaan Der Führer1",
      // img: petambak2,
      contSnpt:
        " blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa",
      pdf: "https://drive.google.com/file/d/1-x8nblK7n3etLC_D3R1nc2ZkTcpBAOn3/preview",
    },
    {
      id: 2,
      title: "Judul dummy",
      // img: pahlawan,
      contSnpt:
        " blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa",
      pdf: "https://drive.google.com/file/d/1zbtpSsxMTG--RBmISe-JGrqHLL5-zC6N/preview",
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
        <Box  p={5}>
          <Heading size='lg' pb={5}>CEEK</Heading>
          <text>
            Garam merupakan suatu komoditas strategis karena potensi
            penggunaannya yang sangat luas, mulai dari sektor konsumsi hingga
            industri yang sendirinya meliputi berbagai bidang, seperti farmasi,
            kosmetik, dan pangan.
          </text>
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
