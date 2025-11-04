import { useEffect, useState } from "react";
import axios from "axios";

const FetchingPractice = () => {
  const [notes, setNotes] = useState([]);

  useEffect =
    (() => {
      axios.get("https://api.example.com/notes").then((promise) => {
        setNotes(promise.data.notes);
      });
    },
    []);
};

return (
  <ul>
    {notes.map((note) => {
      <li key={note}>{note}</li>;
    })}
  </ul>
);

export default FetchingPractice;
