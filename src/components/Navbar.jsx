import { Flex, Wrap, WrapItem, Image, IconButton, Menu, MenuList,MenuButton, MenuItem, Link, Box} from '@chakra-ui/react';
import { AiFillSetting, AiOutlineUser, AiOutlineProfile, AiOutlineLogout } from "react-icons/ai";
import logo from '../assets/img/beach.png';
import navbar from '../assets/css/navbar.module.css';
import React from 'react';

function Navbar() {
return (
<div>
    {/* <VStack p={5}> */}
        {/* <Flex> */}
        <Wrap justify='center'>
          <Wrap maxW='1400px' w='1080px' justify='space-between' align='center' p={5} fontSize='md' className={navbar.menuItem}>   
                    <Image width='45px' objectFit='cover' src={logo} alt='Logo' />
                  {/* <WrapItem>
                  </WrapItem> */}
                  <Box width='40%'></Box>
                
                  <WrapItem>
                    <Link>
                      Produk
                    </Link>
                  </WrapItem>
                  <WrapItem>
                    <Link>
                      Artikel
                    </Link>
                  </WrapItem>
                  <WrapItem>
                    <Link>
                      Lokasi
                    </Link>
                  </WrapItem>
                  <WrapItem>
                    <Link>
                      Narahubung
                    </Link>
                  </WrapItem>
                  <WrapItem>
                      <Menu>
                          <MenuButton as={IconButton} aria-label='Options' icon={<AiFillSetting size={30}/>}
                          variant='outline'
                          />
                          <MenuList>
                              <MenuItem icon={ <AiOutlineUser/> }>
                                User Management
                              </MenuItem>
                              <MenuItem icon={ <AiOutlineProfile/> }>
                                Artikel Management
                              </MenuItem>
                              <MenuItem icon={ <AiOutlineLogout/> }>
                                Logout
                              </MenuItem>                      
                          </MenuList>
                      </Menu>              
                  </WrapItem>           
          </Wrap>   
        </Wrap> 
                
        {/* </Flex> */}
        {/* </VStack> */}
</div>
)
}

export default Navbar
