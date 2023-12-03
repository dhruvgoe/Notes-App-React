import React from "react";
import Adder from "./Adder";

const Header = (props) => {
  return (
    <div className="w-full text-center bg-white shadow-lg py-4 text-5xl font-bold sticky top-0
    flex justify-around">
      NOTES
      <Adder setNotes={props.setNotes} notes={props.notes} />
    </div>
  );
};

export default Header;
 