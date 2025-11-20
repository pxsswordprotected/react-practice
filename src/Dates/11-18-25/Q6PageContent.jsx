import Q6ThemeToggleButton from "./Q6ThemeToggleButton";
import Q6ThemeProvider from "./Q6ThemeProvider";
import { useContext } from "react";
import ThemeContext from "./Q6Context";

const Q6PageContent = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <div
        className={
          isDark ? "bg-gray-900 text-white h-3" : "bg-white text-black h-3"
        }
      ></div>
    </>
  );
};

export default Q6PageContent;
