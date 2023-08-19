import {
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import main from "../assets/css/main.module.css";
import garamKonsum from "../assets/img/garamKonsumsi.jpeg";
import garamSpa from "../assets/img/garamSpa.jpg";
import tunnel from "../assets/img/tunnel.jpeg";

function Produk() {
  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  //   };

  return (
    <>
      <Wrap justify="center" my={5}>
        <Heading>Produk</Heading>
      </Wrap>
      {/* <Slider {...settings}> */}
      <Wrap justify="center">
        <WrapItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                w="300px"
                h="200px"
                src={garamSpa}
                alt="img"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" className={main.headingProduk}>
                  Garam Spa
                </Heading>
                <Text>
                  Produk garam spa Giri Sewu dibuat dari campuran antara garam
                  laut kaya mineral yang membawa banyak manfaat bagi tubuh dan
                  minyak esensial yang memberikan keharuman yang menenangkan
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </WrapItem>
        <WrapItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                w="300px"
                h="200px"
                src={garamKonsum}
                alt="img"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" className={main.headingProduk}>
                  Garam Konsumsi
                </Heading>
                {/* <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                  consequat urna. Morbi a bibendum metus. Donec scelerisque
                  sollicitudin enim eu venenatis.
                </Text> */}
                <Text>
                  Menjadi primadona oleh masyarakat tanjungsari, garam konsumsi
                  SBS memepunyai kualitas tinggi dan berbagai manfaat
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </WrapItem>
      </Wrap>
      {/* <Wrap justify='center'>
            <WrapItem>
                <Card maxW='sm' >
                    <CardBody>
                        <Image
                        w='300px'
                        h='200px'
                        src={garamSpa}
                        alt='img'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md' className={main.headingProduk}>Garam Spa</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                            Donec scelerisque sollicitudin enim eu venenatis. 
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
            </WrapItem>
            <WrapItem>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                        w='300px'
                        h='200px'
                        src={tunnel}
                        alt='img'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md' className={main.headingProduk}>Garam Konsumsi</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                            Donec scelerisque sollicitudin enim eu venenatis. 
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
            </WrapItem>
        </Wrap> */}
      {/* </Slider> */}
    </>
  );
}

export default Produk;
