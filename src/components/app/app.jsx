import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = () => {
  const GameSettings = {
    TIME: 5,
    ERROR_COUNT: 3
  };
  const onButtonClick = () => {};

  return <WelcomeScreen
    time={GameSettings.TIME}
    errorCount={GameSettings.ERROR_COUNT}
    onButtonClick={onButtonClick}
  />;
};

export default App;

