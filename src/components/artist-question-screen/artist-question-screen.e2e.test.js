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
  const userAnswer = `John`;
  const preventDefault = jest.fn();

  const wrapper = shallow(<ArtistQuestionScreen
    question={question}
    screenIndex={0}
    onAnswer={() =>{}}
  />);

  const form = wrapper.find(`form`);
  const input = wrapper.find(`input`);

  input.simulate(`click`);
  form.simulate(`submit`, {preventDefault});

  expect(wrapper.state().userAnswer).toEqual(userAnswer);
  expect(preventDefault).toHaveBeenCalledTimes(1);
});

