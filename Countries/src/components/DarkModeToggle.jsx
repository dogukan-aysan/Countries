import { MdOutlineDarkMode } from "react-icons/md";

function DarkModeToggle() {
  return (
    <div className="dark-mode-toggle">
      <span className="dark-mode-toggle__icon">
        <MdOutlineDarkMode />
      </span>
      <span>Dark Mode</span>
    </div>
  );
}

export default DarkModeToggle;
