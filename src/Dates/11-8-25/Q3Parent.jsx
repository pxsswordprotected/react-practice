import React from "react";
import Q3 from "./Q3";
import { useState } from "react";

const Q3Parent = () => {
  const [type, setType] = useState("success");
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setType("success");
          setVisible(true);
        }}
      >
        Show Success Alert
      </button>

      <button
        onClick={() => {
          setType("error");
          setVisible(true);
        }}
      >
        Show Error Alert
      </button>

      {visible && (
        <Q3 type={type} onDismiss={() => setVisible(false)}>
          <p>This is a {type} alert </p>
        </Q3>
      )}
    </div>
  );
};

export default Q3Parent;
