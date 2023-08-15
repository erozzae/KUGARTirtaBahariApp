import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import main from "../assets/css/main.module.css";

function footer() {
  return (
    <Flex
      mt={12}
      py="20px"
      px="30%"
      flexDirection="row"
      justify="center"
      alignItems="flex-start"
      flexWrap="wrap"
      width="100%"
      h={["0%", "auto"]}
      // height="170px"
      className={main.bgFooter}
    >
      <Flex>
        <Flex mr={8} flexDirection="column" gap="20px" mb={8}>
          <Flex justify="flex-start">
            <Heading size="sm" className={main.footerHeading}>
              Narahubung
            </Heading>
          </Flex>
          <Flex justify="flex-start" flexDirection="column" gap="4px">
            <Box display="flex" flexDirection="row" gap="4px">
              <Link href="#">
                <AiOutlineMail size={25} color="white" />
              </Link>
              <Text className={main.footerHeading}>Koperasi Produsen Garam Tirta Bahari</Text>
            </Box>
            <Box display="flex" flexDirection="row" gap="4px">
              <Link href="https://api.whatsapp.com/send/?phone=6285293170444&text&type=phone_number&app_absent=0">
                <AiOutlineWhatsApp size={25} color="white" />
              </Link>
              <Text className={main.footerHeading}>Pak Winarto</Text>
            </Box>
            <Box display="flex" flexDirection="row" gap="4px">
              <Link href="https://api.whatsapp.com/send/?phone=6285293170444&text&type=phone_number&app_absent=0">
                <AiOutlineWhatsApp size={25} color="white" />
              </Link>
              <Text className={main.footerHeading}>Pak Wahyono</Text>
            </Box>
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="20px">
          <Flex justify="flex-start">
            <Heading size="sm" className={main.footerHeading}>
              Ikuti Kami
            </Heading>
          </Flex>
          <Flex justify="flex-start" flexDirection="row" gap="4px">
            <Link href="#">
              <AiOutlineInstagram size={25} color="white" />
            </Link>
            <Link href="#">
              <AiFillFacebook size={25} color="white" />
            </Link>
            <Link href="#">
              <AiFillTwitterCircle size={25} color="white" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default footer;
