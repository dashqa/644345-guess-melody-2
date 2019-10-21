import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({adapter: new Adapter()});

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
