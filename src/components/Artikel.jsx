import { Wrap, Box, WrapItem, Heading, Text, Image, HStack } from '@chakra-ui/react'
import gula from '../assets/img/gula.jpg'
import main from '../assets/css/main.module.css'
import React from 'react'

function Artikel() {
  return (
    <>
      <Box px='15%'>
        <Box justifyItems='center' maxW='890px' my={8}  className={main.containerArtikel}>
        </Box> 
      </Box>    
      <Wrap justify='center' my={5}>
        <Heading>
             Artikel
        </Heading>
      </Wrap>
      <Box>
      <HStack justify='center'>
      <Box>
        <Image 
        //  boxSize='500px'
         w='200px'
         h='100px'
         objectFit='cover'
         src={gula}
         alt='Img'
         borderRadius='lg'
         className={main.pictArtikel}>
        </Image>
      </Box>
      <Box>
        <Heading pl={5} size='md' className={main.headingProduk}>Kuliner Kesukaan <span>Der Führer</span></Heading>
        <Text pl={5}>
          Penggemar daging dan hidangan tradisional Austria, Hitler berubah jadi vegetarian jelang perang. </Text>
      </Box>
      </HStack>
      </Box>
    </>
  )
}

export default Artikel