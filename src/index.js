import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {GameSettings} from "./mocks/settings";
import {QUESTIONS} from "./mocks/questions";

const init = (gameQuestions) => {
  ReactDOM.render(
      <App
        gameTime={GameSettings.TIME}
        errorCount={GameSettings.ERROR_COUNT}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`));
};

init(QUESTIONS);
