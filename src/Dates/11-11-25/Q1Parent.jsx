import { useState } from "react";
import Q1Child from "./Q1Child";

import React from "react";

const Q1Parent = () => {
  const [items, setItems] = useState([]);

  return (
    <div>
      <Q1Child onAdd={(item) => setItems([...items, item])} />
      <ul>
        {items.map((item, i) => {
          <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Q1Parent;
