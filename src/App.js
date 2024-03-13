import logo from "./logo.svg";
import React from "react";
import Game from "./component/Game";
import Nav from "./component/Nav";
import Help from "./component/Help";
function App() {
  const [isDark, setIsDark] = React.useState(false);
  const [help, setHelp] = React.useState(false);
  function toggleMode() {
    setIsDark((prevState) => !prevState);
  }
  function handleHelp() {
    setHelp((prevState) => !prevState);
  }
  return (
    <main className={isDark && "dark"}>
      <div className="app">
        <Nav
          toggleMode={toggleMode}
          setHelp={handleHelp}
          isDark={isDark}
          help={help}
        />
        {help && <Help help={help} />}
        {!help && <Game toggleMode={toggleMode} isDark={isDark} />}
      </div>
    </main>
  );
}

export default App;
