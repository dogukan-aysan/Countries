import { useContext } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CountryContext } from "../context/CountryContext";

function DarkModeToggle() {
  const { dispatch } = useContext(CountryContext);
  return (
    <div
      className="dark-mode-toggle"
      onClick={() => dispatch({ type: "darkMode" })}
    >
      <span className="dark-mode-toggle__icon">
        <MdOutlineDarkMode />
      </span>
      <span>Dark Mode</span>
    </div>
  );
}

export default DarkModeToggle;
