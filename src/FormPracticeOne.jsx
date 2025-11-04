import { useState } from "react";

const FormPracticeOne = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  //   const [submitted, setSubmit] = useState(false);
  const [err, setErr] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit clicked"); // Does this print?

    if (!email.includes("@")) {
      console.log("Setting error"); // Does this print?
      setErr("Email needs to include @ sign");
      return;
    }

    if (password.length < 6) {
      setErr("pass needs to be longer");
      return;
    }
    setErr("");
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <p>Welcome back!</p>;
  }

  return (
    <>
      {err && <p>{err}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          placeholder="enter password"
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default FormPracticeOne;
