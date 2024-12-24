import React from "react";
// rasomlar

import cal1 from "../../../img/usercall.svg";
import cal2 from "../../../img/userArava.svg";
import cal3 from "../../../img/userCall2.svg";
import cal4 from "../../../img/Uzlang.svg";
function Navbar() {
  return (
    <section className=" bg-[rgb(1,87,190)] top-0 z-30 sticky">
      <div className="mainContainer flex items-center justify-between">
        <div className="flex items-center gap-[30px]">
          <div className="flex items-center gap-2">
            <img src={cal1} alt="" />
            <a className="text-[#FFF] text-[16px]" href="#">
              Rasmiy ofis
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img src={cal2} alt="" />
            <a className="text-[#FFF] text-[16px]" href="#">
              Buyurtmalarim
            </a>
          </div>
        </div>
        <div>
          <p className="text-[#FFF] text-[16px]">
            Eng yaxshi va arzon tovarlarni bizdan topishingiz mumkin{" "}
          </p>
        </div>
        <div className="flex items-center gap-[40px]">
          <div className="flex items-center gap-2">
            <img src={cal3} alt="" />
            <p className="text-[#FFF] text-[16px]">Bog’lanish</p>
          </div>

          <div className="flex items-center gap-2">
            <img src={cal4} alt="" />
            <select className="border-none outline-none bg-[rgb(1,87,190)] text-[#FFF] text-[16px]">
              <option value="uz">Uzbek</option>
              <option value="eng">English</option>
              <option value="ru">Rus</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
