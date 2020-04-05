import React from "react";
import Logo from "../../../src/images/logo.png";

import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">+</li>
            <li className="settings__darkmode">
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
