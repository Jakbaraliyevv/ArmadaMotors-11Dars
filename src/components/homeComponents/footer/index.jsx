import React from "react";
// IMglar

import img1 from "../../../img/telegram.svg";
import img2 from "../../../img/instagram.svg";
import img3 from "../../../img/faceBook.svg";
import img4 from "../../../img/yotube.svg";
import app1 from "../../../img/appStore.svg";
import google1 from "../../../img/googlePlay.svg";
import border from "../../../img/footerBorder.svg";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mainContainer">
      <div className="mb-[40px]">
        <img className="w-[95%] m-auto" src={border} alt="" />
      </div>
      <div className="flex items-start justify-around py-[40px]">
        <div className="flex flex-col justify-center gap-4">
          <h3>{t("footer.footer1_1")}</h3>
          <a href="#">{t("footer.footer1_2")}</a>
          <a href="#">{t("footer.footer1_3")}</a>
          <a href="#">{t("footer.footer1_4")}</a>
          <a href="#">{t("footer.footer1_5")}</a>
          <div className="flex items-center justify-between cursor-pointer">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h3>{t("footer.footer2_1")}</h3>
          <a href="#">{t("footer.footer2_2")}</a>
          <a href="#">{t("footer.footer2_3")}</a>
          <div className="flex flex-col gap-4 cursor-pointer">
            <img src={app1} alt="" />
            <img src={google1} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h3>{t("footer.footer3_1")}</h3>
          <a href="#">{t("footer.footer3_1")}</a>
          <a href="#">{t("footer.footer3_2")}</a>
          <a href="#">{t("footer.footer3_3")}</a>
          <a href="#">{t("footer.footer3_4")}</a>
          <a href="#">{t("footer.footer3_5")}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
