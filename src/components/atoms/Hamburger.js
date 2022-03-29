import { useEffect, useState } from "react";

const Hamburger = ({hamburgerIsOpen, setHamburgerIsOpen}) => {
  const toggleHamburgerIsOpen = () => {
    setHamburgerIsOpen(!hamburgerIsOpen); // toggle between states
  }

  return (
    <div className="hamburger-container">
      <button
        className={`hamburger hamburger--squeeze no-select ${hamburgerIsOpen ? "is-active" : ""}`}
        type="button"
        onClick={toggleHamburgerIsOpen}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

export default Hamburger;
