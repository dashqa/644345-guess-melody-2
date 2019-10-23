import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const GameSettings = {
  TIME: 5,
  ERROR_COUNT: 3
};

export const App = () => {
  return <WelcomeScreen
    time={GameSettings.TIME}
    errorCount={GameSettings.ERROR_COUNT}
  />;
};

