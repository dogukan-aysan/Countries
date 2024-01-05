import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <div className="header">
      <h2 className="header__heading">Where in the world?</h2>
      <div className="header__dark-mode-toggle">
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Header;
