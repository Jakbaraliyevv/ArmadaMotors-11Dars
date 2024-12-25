import React from "react";
// IMglar

import img1 from "../../../img/telegram.svg";
import img2 from "../../../img/instagram.svg";
import img3 from "../../../img/faceBook.svg";
import img4 from "../../../img/yotube.svg";
import app1 from "../../../img/appStore.svg";
import google1 from "../../../img/googlePlay.svg";
import border from "../../../img/footerBorder.svg";
function Footer() {
  return (
    <footer className="mainContainer">
      <div className="mb-[40px]">
        <img className="w-[95%] m-auto" src={border} alt="" />
      </div>
      <div className="flex items-start justify-around py-[40px]">
        <div className="flex flex-col justify-center gap-4">
          <h3>Biz haqimizda</h3>
          <a href="#">Kompaniya haqida ma’lumot</a>
          <a href="#">Foydalanuvchi shartnomasi</a>
          <a href="#">Bog’lanish</a>
          <a href="#">Ijtimoiy tarmoqlarimiz</a>
          <div className="flex items-center justify-between cursor-pointer">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h3>Boshqa</h3>
          <a href="#">Ilova tili</a>
          <a href="#">Ilovani yuklab olish</a>
          <div className="flex flex-col gap-4 cursor-pointer">
            <img src={app1} alt="" />
            <img src={google1} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h3>Katigoriyalar</h3>
          <a href="#">Asosiy</a>
          <a href="#">Extiyot qismlar</a>
          <a href="#">Yaqinda joylanganlar</a>
          <a href="#">Aksiyalar</a>
          <a href="#">Mijozlar tanlovi</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
