import React from "react";
// Rasimlar
import logo from "../../../img/logoqora.svg";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useTranslation } from "react-i18next";
function Header() {
  const { t } = useTranslation();

  return (
    <section className="mainContainer  header  flex items-center justify-between">
      <div>
        <img src={logo} alt="" />
      </div>
      <form className="flex w-[40%] h-[35px] rounded-md border-[1px] border-gray-500">
        <input
          className="w-[90%] rounded-md  pl-2 h-full border-none outline-none"
          placeholder={t("navbar2.search")}
        />
        <button className="w-[10%] flex items-center border-none outline-none h-full justify-center  bg-[rgb(1,87,190)] text-[#FFF] rounded-r-md rounded-l-none">
          <FaSearch />
        </button>
      </form>
      <div className="flex items-center gap-[40px]">
        <div className="flex items-center justify-center flex-col text-[17px] font-normal gap-1">
          <AiOutlineHeart className="text-[25px]" />
          <p>{t("navbar2.like")}</p>
        </div>
        <div className="flex items-center justify-center flex-col text-[17px] font-normal gap-1">
          <FaShoppingCart className="text-[25px]" />
          <p>{t("navbar2.shop")}</p>
        </div>
        <div className="flex items-center justify-center flex-col text-[17px] font-normal gap-1">
          <CgProfile className="text-[25px]" />
          <p>{t("navbar2.user")}</p>
        </div>
      </div>
    </section>
  );
}

export default Header;

// : {
//   search: "Search",
//   like: "Favorites",
//   shop: "Cart",
//   : "My profile",
// },
