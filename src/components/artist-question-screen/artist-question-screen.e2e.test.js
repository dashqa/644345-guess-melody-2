import React from "react";
import {shallow} from "enzyme";
import ArtistQuestionScreen from "./artist-question-screen";

const mock = {
  question: {
    type: ``,
    song: {
      artist: ``,
      src: ``,
    },
    answers: [
      {
        picture: ``,
        artist: `John`,
      },
    ],
  },
};

it(`User answer passed to callback is consistent with string`, () => {
  const {question} = mock;
  const expectAnswer = `John`;
  const handleAnswer = jest.fn();

  const wrapper = shallow(<ArtistQuestionScreen
    question={question}
    screenIndex={0}
    onAnswer={handleAnswer}
  />);

  wrapper.find(`input`).forEach((input, i) => {
    input.simulate(`change`, {target: {value: question.answers[i].artist}});
  });

  expect(handleAnswer).toHaveBeenCalledWith(expectAnswer);
  expect(handleAnswer).toHaveBeenCalledTimes(1);
});

