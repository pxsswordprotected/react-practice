import { useState } from "react";

const FormPracticeOne = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmit] = useState(false);
  const [submitName, setSubmitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted:", name, message);
    setSubmit(true);
    setSubmitName(name);
    setName("");
    setMessage("");
  };

  return (
    <>
      {submitted && <p>thank you for the form {submitName}!</p>}
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter your name"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="enter your message"
        />
        <button type="submit">Submit form</button>
      </form>
    </>
  );
};

export default FormPracticeOne;
