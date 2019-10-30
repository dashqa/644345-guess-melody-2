import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";

const Type = {
  ARTIST: `game--artist`,
  GENRE: `game--genre`,
};

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this._handleUserClick = this._handleUserClick.bind(this);

    this.state = {
      currentQuestion: -1,
    };
  }

  render() {
    const {questions} = this.props;
    const {currentQuestion} = this.state;

    return (
      <section className={`game ${Type.ARTIST}`}>

        {currentQuestion !== -1 &&
          <Header/>
        }

        {this._getScreen(questions[currentQuestion], this._handleUserClick)}
      </section>
    );
  }

  _getScreen(question, onClick) {
    if (!question) {
      const {errorCount, gameTime} = this.props;

      return <WelcomeScreen
        errorCount={errorCount}
        gameTime={gameTime}
        onStartButtonClick={onClick}
      />;
    }

    switch (question.type) {
      case `genre`:
        return (
          <GenreQuestionScreen
            question={question}
            onAnswer={onClick}
          />
        );

      case `artist`:
        return (
          <ArtistQuestionScreen
            question={question}
            onAnswer={onClick}
          />
        );
    }

    return null;
  }

  _handleUserClick() {
    const {questions} = this.props;
    const {currentQuestion} = this.state;

    this.setState({currentQuestion: currentQuestion + 1 >= questions.length ? -1 : currentQuestion + 1});
  }
}

App.propTypes = {
  questions: PropTypes.array.isRequired,
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired
};

export default App;

