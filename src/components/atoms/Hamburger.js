import { useEffect, useState } from "react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen); // toggle between states
  }

  useEffect(() => {
    console.log("isOpen changed... isOpen: " + isOpen);
  }, [isOpen])

  return (
    <div className="hamburger-container">
      <button
        className={`hamburger hamburger--squeeze no-select ${isOpen ? "is-active" : ""}`}
        type="button"
        onClick={handleClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

export default Hamburger;
