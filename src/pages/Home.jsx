import React from "react";
import Artikel from "../components/Artikel";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Maps from "../components/Maps";
import Navbar from "../components/Navbar";
import Produk from "../components/Produk";
import ProfilVid from "../components/ProfilVid";

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
