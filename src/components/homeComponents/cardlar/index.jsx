import React from "react";

import moto from "../../../img/tavsiyaMOto.png";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { getData } from "../../../hooks/mainStore/korzina-slice";
function Cards({ title, id, price }) {
  const dispatch = useDispatch();

  const getdata2 = () => {
    console.log("click");
    dispatch(getData({ title, id, price }));
  };

  return (
    <div className="w-full h-[420px] bg-[#eff4f9] relative rounded-xl ">
      <div className="h-[60%] w-[100%] flex  items-center justify-center">
        <img className="w-[80%]" src={moto} alt="" />
      </div>
      <div className="flex flex-col justify-center gap-[30px] p-4">
        <div className="">
          <h2 className="text-[19px] text-[#000] font-bold pb-2">{title}</h2>
          <button className="w-[60%] bg-[rgb(255,207,31)] rounded-md text-[#000] font-normal">
            {price}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <Button onClick={getdata2}>
            <FaShoppingCart />
          </Button>
          <div className=" bottom-4 right-[30px]  flex items-center gap-2 text-[rgb(255,207,31)]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
