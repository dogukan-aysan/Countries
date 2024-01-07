import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="header" onClick={handleClick}>
      <h2 className="header__heading">Where in the world?</h2>
      <DarkModeToggle />
    </div>
  );
}

export default Header;
