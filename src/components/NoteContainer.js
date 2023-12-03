// NoteContainer.js
import React from "react";
import Notes from "./Notes";

const NoteContainer = (props) => {
  return (
    <div
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10
   mx-auto m-4 p-6"
    >
      {props.notes.map((note) => (
        <Notes
          note={note}
          key={note.id}
          notes={props.notes}
          setNotes={props.setNotes}
        />
      ))}
    </div>
  );
};

export default NoteContainer;
