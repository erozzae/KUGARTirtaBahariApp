import {
  Box,
  Heading,
  Text,
  Image,
  HStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import main from "../assets/css/main.module.css";
import petambak from "../assets/img/petambak.jpg";
import React from "react";

function Main() {
  let mainContent = (
    <Text
      fontSize={[ "sm", "sm", "sm" ]}
      mt={9}
      className={main.textContent}
    >
      Wisata edukasi Kelompok Usaha Garam Rakyat (KUGAR) Tirta Bahari yang
      berada di Pantai Sepanjang, Gunungkidul menawarkan konsep wisata yang
      menggabungkan wisata edukasi mengenai produksi garam dan alam budaya
      pantai Sepanjang. Lokasinya yang berada di provinsi Yogyakarta memudahkan
      bagi para warga lokal maupun wisatawan untuk mengunjunginya. Proses
      produksi garam yang memanfaatkan kearifan lokal menjadi semakin menarik
      dengan bantuna dari para pemandu yang berpengalaman.KUGAR Tirta Bahari
      merupakan kelompok petambak yang mengelola produksi garam di Pantai
      Sepanjang. Pembentukan KUGAR Tirta Bahari dilatarbelakangi oleh semangat
      untuk dapat mengembangkan usaha yang sudah berjalan guna meningkatkan
      perekonomian anggota kelompok dan masyarakat Desa Kemadang.Selain kita,
      siapa lagi yang mampu memanfaatkan potensi alam Indonesia untuk
      mensejatetahkan rakyat Indonesia? Dan sekaranglah waktunya!
    </Text>
  );

  let title = (
    <Heading
      size={['xl', '2xl', '3xl']}
      className={main.headingcarousel}
      textAlign="center"
      letterSpacing={2}
    >
      Koperasi Produsen Tirta Bahari
    </Heading>
  );

  return (
    <div>
      <Wrap justify="center">
        <Box
          maxW="1400px"
          display="flex"
          minW="30vh"
          w="100%"
          minH="50vh"
          // maxH="80vh"
          py={8}
          pl={8}
          className={main.bgcarousel}
        >
          <HStack>
            <Box w={['100%','60%']} pr="10%">
              {title}
              {mainContent}    
            </Box>
            <Wrap w={['0%', '40%']} justify="center" align="end">
              <WrapItem>
                <Image
                  ml={5}
                  minH="50vh"
                  maxH="80vh"
                  boxSize={['0px','200px','400px']}
                  objectFit="cover"
                  src={petambak}
                  alt="img"
                  className={main.imgMain}
                />
              </WrapItem>
            </Wrap>
          </HStack>
        </Box>
      </Wrap>
    </div>
  );
}

export default Main;
