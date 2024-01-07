import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="country-page__back-button" onClick={handleClick}>
      <MdOutlineKeyboardBackspace />
      <span>Back</span>
    </div>
  );
}

export default BackButton;
