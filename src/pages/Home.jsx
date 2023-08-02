import React from "react";
import Artikel from "../components/Artikel";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Maps from "../components/Maps";
import Navbar from "../components/Navbar";
import Produk from "../components/Produk";
import ProfilVid from "../components/ProfilVid";
import bg from "../assets/img/bgPattern3.jpg";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <Box
      backgroundImage={bg}
      backgroundPosition="center"
      backgroundRepeat="repeat"
    >
      <Navbar />
      <Main />
      <ProfilVid />
      <Produk />
      <Artikel />
      <Maps />
      <Footer />
    </Box>
  );
}

export default Home;
