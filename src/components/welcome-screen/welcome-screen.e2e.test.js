import React from "react";
import {shallow} from "enzyme";
import WelcomeScreen from "./welcome-screen";

it(`App is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<WelcomeScreen
    time={0}
    errorCount={0}
    onButtonClick={clickHandler}
  />);

  const startButton = app.find(`button`);
  startButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
