import React from "react";
import img from "../../../img/swipperMoto.svg";
import useFetchData from "../../../hooks/quer-dinamic";
function Lorem() {
  const { data } = useFetchData("http://localhost:5000/lorem");

  const lang = localStorage.getItem("lang") || "uzb";

  return (
    <section className="mainContainer">
      {data?.map((value) => (
        <div
          key={value.id}
          className=" flex items-center gap-4 bg-[#eff4f9] rounded-md"
        >
          <img className="w-[35%] h-full object-cover" src={img} alt="" />
          <div className="w-[60%]">
            <p className="font-normal text-[17px] leading-[191%] tracking-[1px] text-[#000]">
              {value.title[lang] || value.title["uzb"]}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Lorem;
