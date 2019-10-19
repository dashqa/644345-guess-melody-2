import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
      .create(<WelcomeScreen
        time={0}
        errorCount={0}
        onButtonClick={jest.fn()}
      />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
