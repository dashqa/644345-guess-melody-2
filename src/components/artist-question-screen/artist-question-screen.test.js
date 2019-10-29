import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen';

it(`Artist question screen correctly renders after relaunch`, () => {
  const tree = renderer
      .create(<ArtistQuestionScreen
        question={{
          answers: [
            {
              picture: ``,
              artist: ``
            }]
        }}
        screenIndex={0}
        onAnswer={() => {}}
      />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
