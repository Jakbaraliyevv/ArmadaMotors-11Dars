import React from "react";
import logo from "../../../img/logo.svg";
import useFetchData from "../../../hooks/quer-dinamic";
function Showcase() {
  const { data } = useFetchData("http://localhost:5000/showcase");

  const lang = localStorage.getItem("lang") || "uzb";
  return (
    <section className="showcase">
      {data?.map((value) => (
        <div key={value.id} className="mainContainer">
          <div className=" flex items-center justify-between">
            <div className="">
              <img src={logo} alt="" />
            </div>
            <div>
              <button className="bg-[rgb(1,87,190)] text-[#FFF] w-[120px] h-[40px] rounded-md">
                {value.button[lang] || value.button["uzb"]}
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center mt-[60px]">
            <div className="w-[60%] text-center">
              <h1 className="text-[#FFF] font-bold  text-[40px]">
                {value.mainText[lang] || value.mainText["uzb"]}
              </h1>
              <h4 className="text-[#FFF] font-bold text-[22px] py-[25px]">
                {value.text[lang] || value.text["uzb"]}
              </h4>
              <div className="flex items-center justify-center flex-col gap-7">
                <p className="text-[#FFF] font-normal">
                  {value.title[lang] || value.title["uzb"]}
                </p>

                <button className="bg-[rgb(1,87,190)] text-[#FFF] w-[160px] h-[30px] rounded-2xl">
                  {value.button2[lang] || value.button2["uzb"]}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Showcase;
