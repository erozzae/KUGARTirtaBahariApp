import { Card, CardBody, CardFooter, Button, ButtonGroup, Heading, Text, Image, Stack, Divider, Wrap, WrapItem } from '@chakra-ui/react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import main from '../assets/css/main.module.css'
import Slider from "react-slick"
import tunnel from '../assets/img/tunnel.jpeg'
import garamSpa from '../assets/img/spa.jpg'
import React from 'react'

function Produk() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <>
    <Wrap justify='center' my={5}>
        <Heading>
            Produk
        </Heading>
    </Wrap>
      <Slider {...settings}>
        <Wrap justify='center'>
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
        </Wrap>
        <Wrap justify='center'>
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
        </Wrap>
     </Slider>
    </>

  )
}

export default Produk