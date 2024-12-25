import React from "react";
import Cards from "../cardlar";
import { useTranslation } from "react-i18next";

function Choise() {
  const { t } = useTranslation();

  return (
    <>
      <section className="choise mainContainer h-[60px] bg-[rgb(1,87,190)] flex items-center justify-around text-[#FFF] text-[17px] font-bold rounded-md">
        <a href="#">{t("navbarmain.main1")}</a>
        <a href="#">{t("navbarmain.main2")}</a>
        <a href="#">{t("navbarmain.main3")}</a>
        <a href="#">{t("navbarmain.main4")}</a>
        <a href="#">{t("navbarmain.main5")}</a>
        <a href="#">{t("navbarmain.main6")}</a>
      </section>
    </>
  );
}

export default Choise;
