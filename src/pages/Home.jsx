import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Produk from "../components/Produk";
import Artikel from "../components/Artikel";
import Footer from "../components/Footer";
import ProfilVid from "../components/ProfilVid";
import Maps from "../components/Maps"
import React from "react";

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <ProfilVid />
      <Produk />
      <Artikel />
      <Maps/>
      <Footer />
    </div>
  );
}

export default Home;
