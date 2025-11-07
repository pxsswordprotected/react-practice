import { useEffect, useState } from "react";
import Q2LoginService from "./Q2LoginService";
import axios from "axios";

const Q3 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const login = await Q2LoginService.login({ username, password });
      console.log("success", login);
      setUser(login);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(`there was an error: ${error}`);
    }
  };

  if (user) return <p> welcome back {user}!</p>;

  return (
    <div>
      <form onSubmit={handleLogin}>
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
      </form>
    </div>
  );
};

export default Q3;
