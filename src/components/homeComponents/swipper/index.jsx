import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import moto from "../../../img/swipperMoto.svg";
import aksiya from "../../../img/aksiya.png";
function Swipper() {
  return (
    <div className="mainContainer flex h-[420px] gap-4 aksiya">
      <div className="swiperContainer w-[70%]">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img className="rounded-xl !h-full" src={aksiya} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl !h-full" src={aksiya} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-xl !h-full" src={aksiya} alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" w-[40%] h-auto bg-gray-100  rounded-lg">
        <img src={moto} alt="Moto" className="w-full h-auto object-contain " />
        <div className=" flex flex-col items-center justify-center gap-2 p-2">
          <h2 className="text-xl font-bold text-[#0157be]">3 890 000 so’m</h2>
          <p className="text-sm text-[#000] text-center">
            Kuchli 350 vattli dvigatel bilan bizning 2210 elektr skuterimiz tik
            qiyaliklarda...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Swipper;
