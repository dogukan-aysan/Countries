import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <div className="header">
      <h2 className="header__heading">Where in the world?</h2>
      <DarkModeToggle />
    </div>
  );
}

export default Header;
