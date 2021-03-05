import React from "react";
import { bool, func } from "prop-types";

const Burger = ({ open, setOpen }) => {
  return (
    <button
      className="text-gray-500 ml-auto md:hidden"
      onClick={() => setOpen(!open)}
    >
      {!open && (
        <svg viewBox="0 0 24 24" width="32" height="32">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M3 5h18M3 12h18M3 19h18M3 5h18M3 12h18M3 19h18"
          />
        </svg>
      )}
      {open && (
        <svg viewBox="0 0 24 24" width="32" height="32" width="32" height="32">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M6 6l12 12M6 18L18 6M6 6l12 12M6 18L18 6"
          />
        </svg>
      )}
    </button>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
