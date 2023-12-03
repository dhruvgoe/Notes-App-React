import React from "react";
import { FaPlus } from "react-icons/fa";

const Adder = (props) => {

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function addHandler() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    props.setNotes([
      ...props.notes,
      {
        id: new Date().getTime().toString(),
        text: "",
        date: `${day} ${monthsArray[month]}, ${year}`,
        isEditable: true,
      },
    ]);
  }

  return (
    <button onClick={addHandler} 
    className="w-12 rounded-full aspect-square bg-black
    flex justify-center items-center"
    >
      <FaPlus 
      className="text-white text-2xl" />
    </button>
  );
};

export default Adder;
