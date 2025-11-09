import { useState, useEffect } from "react";

import React from "react";

const Q2 = ({ title, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? `▼ ${title}` : `▶ ${title}`}
      </button>
      {visible && <div>children</div>}
    </div>
  );
};

export default Q2;

// Create a Collapsible component that:

//     Takes a title prop (string)

//     Has internal state to track whether content is visible (starts hidden)

//     Shows a button with the title text

//     When clicked, toggles visibility of props.children

//     When visible, button text should be "▼ {title}", when hidden "▶ {title}"
