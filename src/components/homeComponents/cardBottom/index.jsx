import React from "react";
import Cards from "../cardlar";
import useFetchData from "../../../hooks/quer-dinamic";

function CardBottom() {
  const { data } = useFetchData("http://localhost:5000/cardBottom");

  const lang = localStorage.getItem("lang") || "uzb";

  return (
    <div className="mainContainer grid grid-cols-4 gap-4 tavsiya">
      {data?.map((value) => (
        <Cards
          key={value.id}
          title={value.title[lang] || value.title["uzb"]}
          img={value.img}
          price={value.price}
        />
      ))}
    </div>
  );
}

export default CardBottom;
