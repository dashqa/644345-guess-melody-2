import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen';

it(`Genre question screen correctly renders after relaunch`, () => {
  const tree = renderer
      .create(<GenreQuestionScreen
        question={{
          answers: [
            {
              genre: ``,
              src: ``
            }],
          genre: ``
        }}
        screenIndex={0}
        onAnswer={() => {}}
      />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
