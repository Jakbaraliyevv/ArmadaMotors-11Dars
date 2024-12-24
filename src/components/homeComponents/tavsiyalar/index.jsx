import React from "react";
import Cards from "../cardlar";

function Tavsiyalar() {
  const dataMOtor = [
    {
      id: 1,
      title: "Alloy Shimano z3",
      price: "18 544700 usz",
    },
    {
      id: 2,
      title: "Alloy Shimano z3",
      price: "18 544700 usz",
    },
    {
      id: 3,
      title: "Alloy Shimano z3",
      price: "18 544700 usz",
    },
    {
      id: 4,
      title: "Alloy Shimano z3",
      price: "18 544700 usz",
    },
    {
      id: 5,
      title: "Alloy Shimano z3",
      price: "18 544700 usz",
    },
    {
      id: 6,
      title: "Alloy Shimano z3",
      price: "18 544700 usz",
    },
    {
      id: 7,
      title: "Alloy Shimano z3",
      price: "18 544700 usz",
    },
    {
      id: 8,
      title: "Alloy Shimano z3",
      price: "18 544700 usz",
    },
  ];

  return (
    <div className="mainContainer grid grid-cols-4 gap-4 tavsiya">
      {dataMOtor.map((value) => (
        <Cards key={value.id} {...value} />
      ))}
    </div>
  );
}

export default Tavsiyalar;
