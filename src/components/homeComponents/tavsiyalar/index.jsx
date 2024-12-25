import React from "react";
import Cards from "../cardlar";
import useFetchData from "../../../hooks/quer-dinamic";

function Tavsiyalar() {
  const { data } = useFetchData("http://localhost:5000/cards");
  const lang = localStorage.getItem("lang") || "uzb";
  return (
    <div className="mainContainer grid grid-cols-4 gap-4 tavsiya">
      {data?.map((value) => (
        <Cards
          key={value.id}
          title={value.title[lang] || value.title["uzb"]}
          price={value.price}
          img={value.img}
        />
      ))}
    </div>
  );
}

export default Tavsiyalar;
