// Notes.js
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaSave, FaEdit } from "react-icons/fa";
import "./Notes.css";

const Notes = (props) => {
  console.log("Hello World");

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

  const [textable, setTextable] = useState(props.note.text);

  function changeHandler(event) {
    let msg = event.target.value;
    setTextable(msg);
  }

  function deleteHandler() {
    props.setNotes(
      props.notes.filter((note) => {
        if (note.id !== props.note.id) {
          return note;
        }
      })
    );
  }

  function clickHandler() {
    if (props.note.isEditable) {
      props.setNotes((prevNotes) =>
        prevNotes.map((note) => {
          if (props.note.id === note.id) {
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth();
            const day = today.getDate();
            return {
              ...note,
              date: `${day} ${monthsArray[month]}, ${year}`,
              text: textable,
              isEditable: !note.isEditable,
            };
          } else {
            return note;
          }
        })
      );
    } else {
      props.setNotes((prevNotes) =>
        prevNotes.map((note) => {
          if (props.note.id === note.id) {
            return {
              ...note,
              isEditable: !note.isEditable,
            };
          } else {
            return note;
          }
        })
      );
    }
  }

  const colors = ["#fec970", "#fe9b71", "#b592fc", "#00d4fe", "#e3ee8e"];

  function colorGenerator() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  return (
    <div
      className="backG w-full rounded-lg
    flex flex-col p-6 aspect-square justify-between
    hover:scale-105 transition-all duration-200 "
      style={{ backgroundColor: colorGenerator() }}
    >
      <button onClick={clickHandler} className="w-full flex justify-end">
        {props.note.isEditable ? (
          <FaSave className="text-2xl" />
        ) : (
          <FaEdit className="text-2xl" />
        )}
      </button>

      <div>
        <textarea
          className="txtArea tracking-wider
          bg-transparent resize-none text-lg w-full overflow-y-visible
          text-justify h-80 pr-4 focus:outline-none"
          readOnly={!props.note.isEditable}
          onChange={changeHandler}
          value={textable}
        >
          {textable}
        </textarea>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-gray-700 text-lg">{props.note.date}</p>
        <button onClick={deleteHandler}>
          <MdDelete className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Notes;
