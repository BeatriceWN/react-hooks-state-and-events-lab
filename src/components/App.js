import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); //Create a state variable for dark mode

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode); // Event handler to toggle dark mode
  }

  const appClass = isDarkMode ? "App dark" : "App light"; // Decide which CSS class to use based on state

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}> {/* Button text changes based on mode */}
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
