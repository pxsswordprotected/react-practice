import { useState } from "react";
import Q2LoginService from "./Q2LoginService";
import Q4Notes from "./Q4Notes";

const Q5 = () => {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const loggedInUser = await Q2LoginService.login({ username, password });
      setUser(loggedInUser);
      Q4Notes.setToken(loggedInUser.token);
      window.localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      console.log("Token set, ready to create notes");
    } catch (error) {
      console.log(`error:`, error);
    }
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedInUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      Q4Notes.setToken(user.token);
    }
  }, []);

  const addNote = async (event) => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
      important: false,
    };

    const sendNote = await Q4Notes.create(noteObject);
    setNotes(notes.concat(sendNote));
    setNewNote("");
  };

  const handleLogOut = () => {
    setUser(null);
    window.localStorage.removeItem(loggedInUser);
    Q4Notes.setToken(null);
  };

  return <div>Q5</div>;
};

export default Q5;
