import React from "react";
import PropTypes from "prop-types";
import AudioPlayer from "../audio-player/audio-player.jsx";

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    const {answers} = this.props.question;

    this.state = {
      activePlayer: -1,
      userAnswers: answers.map(() => false),
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    const {question} = this.props;
    const {answers, genre} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={this._handleSubmit}
        >
          {answers.map(({src}, i) => {
            const answerKey = `answer-${i}`;

            return (
              <div
                className="track"
                key={`${question}-${answerKey}`}
              >

                <AudioPlayer
                  src={src}
                  isPlaying={i === this.state.activePlayer}
                  onPlayButtonClick={() => this.setState({
                    activePlayer: this.state.activePlayer === i ? -1 : i
                  })}
                />

                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name={answerKey}
                    value={answerKey}
                    id={answerKey}
                    onChange={() => this._handleChange(i)}
                  />
                  <label
                    className="game__check"
                    htmlFor={answerKey}
                  >
                          Отметить
                  </label>
                </div>
              </div>
            );
          })}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }

  _handleChange(songIndex) {
    this.setState({
      userAnswers: this.state.userAnswers.map((answer, i) => i === songIndex ? !answer : answer)
    });
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this.props.onAnswer(this.state.userAnswers);
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      genre: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.string
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
