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
import thumb5 from "../assets/img/Pelatihan Diversifikasi Garam.png";
import thumb6 from "../assets/img/Design Opening.png";
import thumb7 from "../assets/img/Kajian Potensi Garam Gunungkidul 2023.png";
import thumb8 from "../assets/img/Proses Produksi Garam.jpg";
import Footer from "../components/Footer";

function ArtikelsAll() {
  let data = [
    {
      id: 1,
      title: "Analisis Garam Spa dan Variannya",
      img: grSpa,
      contSnpt:
        " Garam spa adalah garam yang khusus dirancang dan digunakan dalam proses perawatan spa atau bisa digunakan saat mandi. Garam ini biasanya mengandung mineral dan bahan tambahan yang memberikan manfaat bagi kulit dan kenyamanan tubuh.",
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
    {
      id: 5,
      title:
        "Pelatihan Diversifikasi Garam: Peningkatan Potensi Produk Garam di Pantai Sepanjang bagi Koperasi Produsen Garam Tirta Bahari",
      img: thumb5,
      contSnpt:
        'Dalam upaya mengembangkan potensi produk garam dan memberikan wawasan baru kepada para petambak garam pada Koperasi Produsen Garam Tirta Bahari, Tim Gugus Tugas Kemandirian Garam Nasional Universitas Gadjah Mada (GTKGN-UGM) bersama dengan Tim Kuliah Kerja Nyata Pembelajaran Pemberdayaan Masyarakat Universitas Gadjah Mada (KKN-PPM UGM) Unit Tanjungsari menggelar kegiatan "Pelatihan Diversifikasi Produk Garam".',
      pdf: "https://drive.google.com/file/d/1J0I5fbFHy_1yhb2LRKqpF_1Q3oCZNadq/preview",
    },
    {
      id: 6,
      title: "Design Opening",
      img: thumb6,
      contSnpt:
        "Berdiri sejak tahun 2020, Koperasi Produsen Garam Tirta Bahari adalah pionir tambak garam di Gunungkidul. Garam sebagai komoditas yang penuh potensi yang menjanjikan telah menciptakan produk-produk garam yang menakjubkan.",
      pdf: "https://drive.google.com/file/d/1nNbIxvtLlwjzQ95D1RcTjUm0YDKZxgej/preview",
    },
    {
      id: 7,
      title: "Kajian Potensi Ekonomi Garam di Gunungkidul 2023",
      img: thumb7,
      contSnpt:
        "Kajian ini bertujuan untuk menganalisis potensi pasar untuk mengkreasikan produksi garam di Pantai Selatan Kabupaten Gunungkidul dengan menggunakan pendekatan diversifikasi produk garam. Hasil dari kajian ini menunjukkan bahwa terdapat peluang yang besar di wilayah Pantai Selatan Kabupaten Gunungkidul yang didorong oleh adanya potensi dari sektor pertanian, peternakan, garam konsumsi, dan pengembangan eduwisata garam.",
      pdf: "https://drive.google.com/file/d/1IOhPvpY_cecAJoQJAV2EPY90HKR5HD95/preview",
    },
    {
      id: 8,
      title: "Proses Produksi Garam Koperasi Produsen Garam Tirta Bahari",
      img: thumb8,
      contSnpt:
        "Koperasi Produsen Garam Tirta Bahari selaku pelaku usaha garam di Pantai Sepanjang, Gunungkidul, Daerah Istimewa Yogyakarta melakukan kegiatan proses produksi melalui beberapa tahap. Melalui artikel ini, akan dipaparkan mengenai proses produksi yang dikerjakan beserta peralatan yang dibutuhkan.",
      pdf: "https://drive.google.com/file/d/1zNOvhDU3CJ61CgLLFtLMWjTozIfxYcMJ/preview",
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
