import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

export const App = () => {
  const GameSettings = {
    time: 5,
    errorsCount: 3,
  };
  return <WelcomeScreen
    time={GameSettings.time}
    errorCount={GameSettings.errorsCount}
  />;
};

