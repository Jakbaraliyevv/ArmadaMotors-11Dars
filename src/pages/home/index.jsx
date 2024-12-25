import React from "react";
import Navbar from "../../components/homeComponents/navbar";
import Showcase from "../../components/homeComponents/showcase";
import Header from "../../components/homeComponents/header";
import Swipper from "../../components/homeComponents/swipper";
import Choise from "../../components/homeComponents/choise";
import Tavsiyalar from "../../components/homeComponents/tavsiyalar";
import Lorem from "../../components/homeComponents/lorem";
import CardBottom from "../../components/homeComponents/cardBottom";
import Footer from "../../components/homeComponents/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Header />
      <Swipper />
      <Choise />
      <Tavsiyalar />
      <Lorem />
      <CardBottom />
      <Footer />
    </div>
  );
}

export default Home;
