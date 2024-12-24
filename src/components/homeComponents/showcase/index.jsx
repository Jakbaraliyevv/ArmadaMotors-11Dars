import React from "react";
import logo from "../../../img/logo.svg";
import show from "../../../img/showcase.png";
import { Button } from "antd";
function Showcase() {
  return (
    <section className="showcase">
      <div className="mainContainer">
        <div className=" flex items-center justify-between">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div>
            <button className="bg-[rgb(1,87,190)] text-[#FFF] w-[120px] h-[40px] rounded-md">
              Kirish
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center mt-[60px]">
          <div className="w-[60%] text-center">
            <h1 className="text-[#FFF] font-bold  text-[40px]">
              SKUTERLAR <br /> onlayn dokoniga xush kelibsiz
            </h1>
            <h4 className="text-[#FFF] font-bold text-[22px] py-[25px]">
              skuterlar va ularning extiyot qimlarini topishingiz mumkin
            </h4>
            <div className="flex items-center justify-center flex-col gap-7">
              <p className="text-[#FFF] font-normal">
                Exporso Velosiped/Avtomobil/Avtomobil ehtiyot qismlari,
                Aksessuarlar doʻkoni e-tijorat Bootstrap 4 shabloni Bu sizning
                do'koningiz uchun toza, yoqimli va sezgir shablondir. U barcha
                zamonaviy qurilmalarda, jumladan, noutbuklar, planshetlar,
                smartfonlar va, albatta, ish stoli kompyuterlarida chiroyli
                ko'rsatish uchun mo'ljallangan . shunchaki yozib qo’yildi
              </p>

              <button className="bg-[rgb(1,87,190)] text-[#FFF] w-[160px] h-[30px] rounded-2xl">
                Kirish
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
