import React from "react";
import { useContext } from "react";
import ThemeContext from "./Q6Context";

const Q6ThemeToggleButton = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? "Light" : "Dark"}
    </button>
  );
};
export default Q6ThemeToggleButton;
