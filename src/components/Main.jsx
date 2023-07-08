import { Box, Heading, Text, Image, HStack, Wrap, WrapItem } from '@chakra-ui/react'
import main from '../assets/css/main.module.css'
import garam1 from '../assets/img/garam-1.jpg'
import React from 'react'


function Main() {


return (
  <div>
    <Wrap justify='center '>
    <Box maxW='1400px' display='flex' w='100%' minH='50vh' maxH='80vh' p={8} className={main.bgcarousel}>
      <HStack>
      <Box w='70%'>   
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
      <Wrap w='30%'>
        <WrapItem>
            <Image
              ml={5}
              width='100px'
              boxSize='300px'
              objectFit='cover'
              src={garam1}
              alt='img'
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