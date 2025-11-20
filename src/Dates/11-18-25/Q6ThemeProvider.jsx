import { useState, useContext } from "react";
import ThemeContext from "./Q6Context";
import Q6ThemeToggleButton from "./Q6ThemeToggleButton";
import Q6PageContent from "./Q6PageContent";

const Q6ThemeProvider = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Q6ThemeToggleButton />
      <Q6PageContent />
    </ThemeContext.Provider>
  );
};

export default Q6ThemeProvider;
