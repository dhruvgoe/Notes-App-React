// App.js
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NoteContainer from "./components/NoteContainer";
import Adder from "./components/Adder";

function App() {
  function setToStorage() {
    localStorage.clear();
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  function getFromStorage() {
    let notesArray = localStorage.getItem("notes");
    notesArray = JSON.parse(notesArray);
    if (notesArray) {
      return notesArray;
    } else {
      return [];
    }
  }

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getFromStorage());
  }, []);

  useEffect(() => {
    setToStorage(notes);
  }, [notes]);

  return (
    <div className="w-full h-screen overflow-x-hidden">
      <div className="w-full shadow-lg flex sticky top-0">
        <Header setNotes={setNotes} notes={notes} />
      </div>
      <div className="">
        <NoteContainer notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;
