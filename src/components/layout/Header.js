import React from "react";

import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="images/logo.png" alt="logo" />
        </div>
        <div className="setting">
          <li>+</li>
          <li>
            <FaPizzaSlice />
          </li>
        </div>
      </nav>
    </header>
  );
};
