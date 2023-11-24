import React, { useState } from "react";
import App from "./App";

function Header( {onDarkModeClick, isDarkMode} ) {   
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header;