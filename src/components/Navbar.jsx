import {
  Box,
  Image,
  Link,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Link as ReachLink } from "react-router-dom";
import navbar from "../assets/css/navbar.module.css";
import logo from "../assets/img/beach.png";

function Navbar() {
  const linkRef = useRef(null);
  const goto = (ref) =>{

  }
  return (
    <div>
      <Wrap justify="center" className={navbar.bgNavbar}>
        <Wrap
          maxW="1400px"
          w="1080px"
          justify="space-between"
          align="center"
          p={5}
          fontSize="md"
          className={navbar.navItem}
        >
          <Image width="45px" objectFit="cover" src={logo} alt="Logo" />
          {/* <WrapItem>
                  </WrapItem> */}
          <Box width="40%"></Box>

          <WrapItem>
            <Link as={ReachLink}>Produk</Link>
          </WrapItem>
          <WrapItem>
            <Link as={ReachLink}>Artikel</Link>
          </WrapItem>
          <WrapItem>
            <Link as={ReachLink}>Lokasi</Link>
          </WrapItem>
          <WrapItem>
            <Link as={ReachLink}>Narahubung</Link>
          </WrapItem>
          {/* <WrapItem>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<AiFillSetting size={30} />}
                variant="outline"
              />
              <MenuList>
                <MenuItem  as={ReachLink} to="/users" icon={<AiOutlineUser />} className={navbar.menuItem}>
                  User Management          
                </MenuItem>
                <MenuItem as={ReachLink} to="/artikels/manajemen" icon={<AiOutlineProfile />} className={navbar.menuItem}>
                  Artikel Management
                </MenuItem>
                <MenuItem as={ReachLink} icon={<AiOutlineLogout />} className={navbar.menuItem}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </WrapItem> */}
        </Wrap>
      </Wrap>
    </div>
  );
}

export default Navbar;
