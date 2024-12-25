import React from "react";
// rasimlar

import cal1 from "../../../img/usercall.svg";
import cal2 from "../../../img/userArava.svg";
import cal3 from "../../../img/userCall2.svg";
import cal4 from "../../../img/Uzlang.svg";
import cal5 from "../../../img/rus.webp";
import cal6 from "../../../img/eng.png";
import { useTranslation } from "react-i18next";

function Navbar({ hand }) {
  const changeSubmitLang = (e) => {
    hand(e.target.value);
  };

  const languge = localStorage.getItem("lang") || "uzb";
  const { t } = useTranslation();

  return (
    <section className=" bg-[rgb(1,87,190)] top-0 z-30 sticky">
      <div className="mainContainer flex items-center justify-between">
        <div className="flex items-center gap-[30px]">
          <div className="flex items-center gap-2">
            <img src={cal1} alt="" />
            <a className="text-[#FFF] text-[16px]" href="#">
              {t("navbar1.userCall")}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img src={cal2} alt="" />
            <a className="text-[#FFF] text-[16px]" href="#">
              {t("navbar1.shop")}
            </a>
          </div>
        </div>
        <div>
          <p className="text-[#FFF] text-[16px]">{t("navbar1.choise")}</p>
        </div>
        <div className="flex items-center gap-[40px]">
          <div className="flex items-center gap-2">
            <img src={cal3} alt="" />
            <p className="text-[#FFF] text-[16px]"> {t("navbar1.connect")}</p>
          </div>

          <div className="flex items-center gap-2">
            {languge === "uzb" ? (
              <img src={cal4} alt="Uzbek" />
            ) : languge === "eng" ? (
              <img
                className="rounded-[100%] w-[22px] h-[22px]"
                src={cal6}
                alt="English"
              />
            ) : (
              <img
                className="rounded-[100%] w-[22px] h-[22px]"
                src={cal5}
                alt="Default"
              />
            )}
            <select
              onChange={changeSubmitLang}
              className="border-none outline-none bg-[rgb(1,87,190)] text-[#FFF] text-[16px]"
              value={localStorage.getItem("lang")}
            >
              <option value="uzb">Uzbek</option>
              <option value="eng">English</option>
              <option value="rus">Pусский</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
