import noteService from "./services/noteService";
import { useEffect, useState } from "react";

const Question6 = () => {
  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState(null);
  const [inputNote, setInputNote] = useState("");

  useEffect(() => {
    noteService
      .getAll()
      .then((p) => setNotes(p.data))
      .catch((error) => setMessage(`Error loading notes: ${error.message}`));
  }, []);

  const addNote = (text) => {
    noteService
      .create({ text, important: false })
      .then((p) => {
        setNotes(notes.concat(p.data));
      })
      .catch((error) => setMessage(`Error adding note: ${error.message}`));
  };

  const toggleImportant = (id) => {
    const note = notes.find((p) => id === p.id);
    const newNote = {
      ...note,
      important: !note.important,
    };

    noteService
      .update(id, newNote)
      .then((pr) => {
        setNotes(notes.map((p) => (p.id === id ? pr.data : p)));
      })
      .catch((error) =>
        setMessage(`Error updating note ${id}: ${error.message}`)
      );
  };

  const deleteNote = (id) => {
    const deleted = notes.find((note) => note.id === id); //if deletion fails
    setNotes(notes.filter((n) => n.id !== id));

    noteService.remove(id).catch((error) => {
      setMessage(`Error deleting note: ${error.message}`);
      setNotes(notes.concat(deleted));
    });
  };

  return (
    <>
      {message && <p>error: {message}</p>}

      <ul>
        {notes.map((note) => {
          <li key={note.id}>
            {note.content}
            <button onClick={() => toggleImportant(note.id)}>
              {note.important ? "★" : "☆"}
            </button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>;
        })}
      </ul>
      <input
        type="text"
        value={inputNote}
        name="note"
        onChange={(e) => setInputNote(e.target.value)}
        placeholder="enter note..."
      ></input>
      <button
        onClick={() => {
          addNote(inputNote);
          setInputNote("");
        }}
      >
        Add new note
      </button>
    </>
  );
};

export default Question6;
