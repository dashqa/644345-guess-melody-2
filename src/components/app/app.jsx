import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = () => {
  const GameSettings = {
    time: 5,
    errorsCount: 3
  };
  const onButtonClick = () => {};

  return <WelcomeScreen
    time={GameSettings.time}
    errorCount={GameSettings.errorsCount}
    onButtonClick={onButtonClick}
  />;
};

export default App;

