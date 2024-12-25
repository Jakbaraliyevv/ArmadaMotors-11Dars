import React from "react";
import logo from "../../../img/logo.svg";
import useFetchData from "../../../hooks/quer-dinamic";
function Showcase() {
  const { data } = useFetchData("http://localhost:5000/showcase");

  const lang = localStorage.getItem("lang") || "uzb";
  return (
    <section className="showcase">
      {data?.map((value) => (
        <div key={value.id} className="mainContainer max-[1019px]:text-[0.8em] max-[820px]:text-[0.7em] max-[714px]:text-[0.6em] max-[500px]:text-[0.5em]">
          <div className=" flex items-center justify-between">
            <div className="">
              <img className="w-[15em]" src={logo} alt="" />
            </div>
            <div>
              <button className="bg-[rgb(1,87,190)] text-[#FFF] text-[1em] w-[8em] h-[2.5em] rounded-md">
                {value.button[lang] || value.button["uzb"]}
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center mt-[3em]">
            <div className="w-[60%] text-center">
              <h1 className="text-[#FFF] font-bold  text-[2.4em]">
                {value.mainText[lang] || value.mainText["uzb"]}
              </h1>
              <h4 className="text-[#FFF] font-bold text-[1.6em] py-[1.6em]">
                {value.text[lang] || value.text["uzb"]}
              </h4>
              <div className="flex items-center justify-center flex-col gap-[1em]">
                <p className="text-[#FFF] font-normal">
                  {value.title[lang] || value.title["uzb"]}
                </p>

                <button className="bg-[rgb(1,87,190)] text-[#FFF] w-[12em] h-[2em] rounded-2xl text-[1em]">
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
