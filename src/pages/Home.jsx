import React from "react";
import Artikel from "../components/Artikel";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Maps from "../components/Maps";
import Navbar from "../components/Navbar";
import Produk from "../components/Produk";
import ProfilVid from "../components/ProfilVid";
import bg from "../assets/img/bgPattern.jpg";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";

function Home() {
  const linkProduk = useRef(null);
  const linkArtikel = useRef(null);
  const linkLokasi = useRef(null);
  const linknarahubung = useRef(null);

  const gotoProduk = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const gotoArtikel = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const gotoLLokasi = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const gotoNarahubung = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const clickProduk = () => {
    gotoProduk(linkProduk.current);
  };

  const clickArtikel = () => {
    gotoArtikel(linkArtikel.current);
  };

  const clickLokasi = () => {
    gotoLLokasi(linkLokasi.current);
  };

  const clickNarahubung = () => {
    gotoNarahubung(linknarahubung.current);
  };

  return (
    <Box
      backgroundImage={bg}
      backgroundPosition="center"
      backgroundRepeat="repeat"
    >
      <Navbar
        clickProduk={clickProduk}
        clickArtikel={clickArtikel}
        clickLokasi={clickLokasi}
        clickNarahubung={clickNarahubung}
      />
      <Box>
        <Main />
      </Box>
      <Box>
        <ProfilVid />
      </Box>
      <Box ref={linkProduk}>
        <Produk />
      </Box>
      <Box ref={linkArtikel}>
        <Artikel />
      </Box>
      <Box ref={linkLokasi}>
        <Maps />
      </Box>
      <Box ref={linknarahubung}>
        <Footer />
      </Box>
    </Box>
  );
}

export default Home;
