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
  const userAnswers = [`rock`];
  const preventDefault = jest.fn();

  const wrapper = shallow(<GenreQuestionScreen
    question={question}
    screenIndex={0}
    onAnswer={() =>{}}
  />);

  const form = wrapper.find(`form`);
  const input = wrapper.find(`input`);

  input.simulate(`onChange`);
  form.simulate(`submit`, {preventDefault});

  expect(wrapper.state().userAnswers).toEqual(userAnswers);
  expect(preventDefault).toHaveBeenCalledTimes(1);
});
