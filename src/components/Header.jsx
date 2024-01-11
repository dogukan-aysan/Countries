import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

function Header() {
  const navigate = useNavigate();
  const { dispatch } = useContext(CountryContext);
  const handleClick = () => {
    dispatch({ type: "reset" });
    navigate("/");
  };
  return (
    <div className="header">
      <h2 className="header__heading" onClick={handleClick}>
        Where in the world?
      </h2>
      <DarkModeToggle />
    </div>
  );
}

export default Header;
