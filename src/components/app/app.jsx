import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

export const App = () => {
  const GameSettings = {
    TIME: 5,
    ERROR_COUNTS: 3,
  };
  return <WelcomeScreen
    time={GameSettings.TIME}
    errorCount={GameSettings.ERROR_COUNTS}
  />;
};

