import React from "react";
import Cards from "../cardlar";
import useFetchData from "../../../hooks/quer-dinamic";

function Tavsiyalar() {
  const { data } = useFetchData("http://localhost:5000/cards");
  const lang = localStorage.getItem("lang") || "uzb";
  // const dataMOtor = [
  //   {
  //     id: 1,
  //     title: "Alloy Shimano z3",
  //     price: "18 544700 usz",
  //   },
  //   {
  //     id: 2,
  //     title: "Alloy Shimano z3",
  //     price: "18 544700 usz",
  //   },
  //   {
  //     id: 3,
  //     title: "Alloy Shimano z3",
  //     price: "18 544700 usz",
  //   },
  //   {
  //     id: 4,
  //     title: "Alloy Shimano z3",
  //     price: "18 544700 usz",
  //   },
  //   {
  //     id: 5,
  //     title: "Alloy Shimano z3",
  //     price: "18 544700 usz",
  //   },
  //   {
  //     id: 6,
  //     title: "Alloy Shimano z3",
  //     price: "18 544700 usz",
  //   },
  //   {
  //     id: 7,
  //     title: "Alloy Shimano z3",
  //     price: "18 544700 usz",
  //   },
  //   {
  //     id: 8,
  //     title: "Alloy Shimano z3",
  //     price: "18 544700 usz",
  //   },
  // ];

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
