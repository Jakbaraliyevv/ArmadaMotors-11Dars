import Navbar from "../../components/homeComponents/navbar";
import Showcase from "../../components/homeComponents/showcase";
import Header from "../../components/homeComponents/header";
import Swipper from "../../components/homeComponents/swipper";
import Choise from "../../components/homeComponents/choise";
import Tavsiyalar from "../../components/homeComponents/tavsiyalar";
import Lorem from "../../components/homeComponents/lorem";
import CardBottom from "../../components/homeComponents/cardBottom";
import Footer from "../../components/homeComponents/footer";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import uzb from "../../locale/uzb";
import rus from "../../locale/rus";
import eng from "../../locale/english";

// ChangeLanguage

i18next.use(initReactI18next).init({
  resources: {
    uzb: { translation: uzb },
    rus: { translation: rus },
    eng: { translation: eng },
  },

  lng: localStorage.getItem("lang") || "eng",
  fallbackLngL: "eng",
});

function Home() {
  const hand = (value) => {
    localStorage.setItem("lang", value);
    i18next.changeLanguage(value);
  };

  return (
    <div>
      <Navbar hand={hand} />
      <Showcase />
      {/* <Header /> */}
      {/* <Swipper /> */}
      {/* <Choise /> */}
      {/* <Tavsiyalar /> */}
      {/* <Lorem /> */}
      {/* <CardBottom /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
