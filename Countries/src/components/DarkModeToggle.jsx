import { useContext } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

import { CountryContext } from "../context/CountryContext";

function DarkModeToggle() {
  const { dispatch, isDarkMode } = useContext(CountryContext);
  return (
    <div
      className="dark-mode-toggle"
      onClick={() => dispatch({ type: "darkMode" })}
    >
      <span className="dark-mode-toggle__icon">
        {isDarkMode ? <IoMoon /> : <IoMoonOutline />}
      </span>
      <span>Dark Mode</span>
    </div>
  );
}

export default DarkModeToggle;
