import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import moto from "../../../img/swipperMoto.svg";
import aksiya from "../../../img/aksiya.png";
import useFetchData from "../../../hooks/quer-dinamic";
function Swipper() {
  const { data } = useFetchData("http://localhost:5000/swipper");

  console.log(data, "swipper");

  const lang = localStorage.getItem("lang") || "uzb";
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
        {data?.map((value) => (
          <div>
            <img
              src={moto}
              alt="Moto"
              className="w-full h-auto object-contain "
            />
            <div className=" flex flex-col items-center justify-center gap-2 p-2">
              <h2 className="text-xl font-bold text-[#0157be]">
                {value.price}
              </h2>
              <p className="text-sm text-[#000] text-center">
                {value.title[lang] || value.title["uzb"]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Swipper;
