import React from "react";
import {shallow} from "enzyme";
import WelcomeScreen from "./welcome-screen";

it(`Click handler called only once`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<WelcomeScreen
    gameTime={0}
    errorCount={0}
    onStartButtonClick={clickHandler}
  />);

  const startButton = app.find(`button`);
  startButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
