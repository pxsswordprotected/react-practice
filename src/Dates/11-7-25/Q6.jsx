import React, { useState } from "react";
import Q6LoginService from "./Q6LoginService";
import Q6Notes from "./Q6Notes";

const Q6 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const loggedIn = await Q6LoginService.login({ username, password });
      console.log("logged in data:", loggedIn);
      setUser(loggedIn);
      Q6Notes.setToken(loggedIn.token);
      const token = Q6Notes.setToken(user.token);
      window.localStorage.setItem("user", JSON.stringify(loggedIn));

      setUsername("");
      setPassword("");
    } catch (error) {
      console.log("error:", error);
      setErrorMessage(error.message || "login failed");
    }
  };

  useEffect(() => {
    const userLoggedIn = JSON.parse(window.localStorage.getItem("user"));
    if (userLoggedIn) {
      setUser(userLoggedIn);
      Q6Notes.setToken(userLoggedIn.token);
    }
  }, []);

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem(user);
    Q6Notes.setToken(null);
  };

  if (!user) {
    return (
      <div>
        {errorMessage && <p>error: {errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="enter username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="enter password"
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <>
      <p>Welcome, {user.name}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Q6;

// Modify your App to persist login state:

//     In handleSubmit (after successful login): save the user to Local Storage using JSON.stringify()

//     Add a useEffect with an empty dependency array [] that:

//         Reads from Local Storage on mount

//         Parses the user data back from a string

//         Sets the user state and calls noteService.setToken(user.token) if a saved user exists

//     In your logout function: remove the user from Local Storage
