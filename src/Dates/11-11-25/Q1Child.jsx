import React from "react";
import { useState } from "react";

const Q1Child = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="input"
        />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Q1Child;
