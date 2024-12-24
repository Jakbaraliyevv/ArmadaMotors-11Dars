import React from "react";
import img from "../../../img/swipperMoto.svg";
function Lorem() {
  return (
    <section className="mainContainer flex items-center gap-4 bg-[#eff4f9] rounded-md">
      <img className="w-[35%] h-full object-cover" src={img} alt="" />
      <div className="w-[60%]">
        <p className="font-normal text-[17px] leading-[191%] tracking-[1px] text-[#000]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </section>
  );
}

export default Lorem;
