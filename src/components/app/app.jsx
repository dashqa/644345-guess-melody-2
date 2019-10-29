import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";

class App extends React.PureComponent {
  static getScreen(question, {gameTime, errorCount, questions}, onUserAnswer) {
    if (question === -1) {
      return <WelcomeScreen
        gameTime={gameTime}
        errorCount={errorCount}
        onStartButtonClick={onUserAnswer}
      />;
    }

    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`:
        return <GenreQuestionScreen
          screenIndex={question}
          question={currentQuestion}
          onAnswer={onUserAnswer}
        />;

      case `artist`:
        return <ArtistQuestionScreen
          screenIndex={question}
          question={currentQuestion}
          onAnswer={onUserAnswer}
        />;
    }

    return null;
  }

  constructor(props) {
    super(props);
    this._handleUserClick = this._handleUserClick.bind(this);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {question} = this.state;
    return App.getScreen(question, this.props, this._handleUserClick);
  }

  _handleUserClick() {
    const {questions} = this.props;

    this.setState((prevState) => {
      const nextIndex = prevState.question + 1;
      const isEnd = nextIndex >= questions.length;

      return {
        question: !isEnd ? nextIndex : -1,
      };
    });
  }
}

App.propTypes = {
  questions: PropTypes.array.isRequired,
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired
};

export default App;

