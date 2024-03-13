import React from "react";
import { RiSunFill } from "react-icons/ri";
import { RiMoonFill } from "react-icons/ri";
function Nav(props) {
  const darkMode = props.isDark;
  const help = props.help;
  const dark = {
    color: darkMode ? "#fff" : "#282d35",
  };
  const nav = {
    backgroundColor: darkMode ? "#278ef7" : "#fff",
  };
  return (
    <div className="nav" style={nav}>
      <div className="title" onClick={props.setHelp} style={dark}>
        {help ? "Back" : "Help"}
      </div>
      <div className="modes">
        {darkMode && (
          <RiSunFill
            className="light-mode"
            style={dark}
            onClick={props.toggleMode}
          />
        )}
        {!darkMode && (
          <RiMoonFill
            className="light-mode"
            style={dark}
            onClick={props.toggleMode}
          />
        )}
      </div>
    </div>
  );
}

export default Nav;
