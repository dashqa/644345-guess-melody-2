import React from "react";
import {shallow} from "enzyme";
import GenreQuestionScreen from "./genre-question-screen";

const mock = {
  question: {
    type: ``,
    genre: ``,
    answers: [
      {
        src: ``,
        genre: `rock`,
      },
    ],
  },
};

it(`User answer passed to callback is consistent with array of strings`, () => {
  const {question} = mock;
  const preventDefault = jest.fn();
  const handleAnswer = jest.fn();

  const wrapper = shallow(<GenreQuestionScreen
    question={question}
    screenIndex={0}
    onAnswer={handleAnswer}
  />);

  const form = wrapper.find(`form`);
  wrapper.find(`input`).forEach((input) => {
    input.simulate(`change`, {target: {value: true}});
  });

  form.simulate(`submit`, {preventDefault});
  expect(preventDefault).toHaveBeenCalledTimes(1);
  expect(handleAnswer).toHaveBeenCalledWith(question.answers.map(() => true));
});
