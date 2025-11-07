import React from "react";
import { useEffect, useState } from "react";

const Q1 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("logged in with:", { username, password });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Enter your email..."
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your password..."
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Q1;
