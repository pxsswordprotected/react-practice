import { useState } from "react";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addNote = () => {
    if (inputValue.trim() === "") return;

    setNotes([...notes, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="enter new note"
      />
      <button onClick={addNote}>Add new note</button>

      <ul>
        {notes.map((note) => {
          <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
};

export default NoteApp;
