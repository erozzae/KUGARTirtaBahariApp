import { Box, Heading, Text, Image, HStack, Wrap, WrapItem } from '@chakra-ui/react'
import main from '../assets/css/main.module.css'
import petambak from '../assets/img/petambak.jpg'
import React from 'react'


function Main() {


return (
  <div>
    <Wrap justify='center'>
    <Box maxW='1400px' display='flex' minW='30vh' w='100%' minH='50vh' maxH='80vh' py={8} pl={8}  className={main.bgcarousel}>
      <HStack>
      <Box w='60%' pr='10%'>   
            <Heading size='3xl' className={main.headingcarousel}>
              Kugar Tirta Bahari
            </Heading> 
            <Heading size='3xl'  className={main.headingcarousel}>       
            <Text fontSize='sm' mt={9} className={main.textContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem.
            </Text>
            </Heading>
      </Box>
      <Wrap w='40%' justify='end' align='end'>
        <WrapItem>
            <Image
              ml={5}
              // width='100px'
              minH='50vh'
              maxH='80vh'
              // maxBlockSize='500px'
              boxSize='500px'
              objectFit='cover'
              src={petambak}
              alt='img'
              className={main.imgMain}
            />
        </WrapItem>
      </Wrap>  
      </HStack>
    </Box>
    </Wrap>
   
</div>
)
}

export default Main