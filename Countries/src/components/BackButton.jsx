import { MdOutlineKeyboardBackspace } from "react-icons/md";

function BackButton() {
  return (
    <div className="country-page__back-button">
      <MdOutlineKeyboardBackspace />
      <span>Back</span>
    </div>
  );
}

export default BackButton;
