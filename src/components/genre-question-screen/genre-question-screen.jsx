import React from "react";
import PropTypes from "prop-types";

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userAnswers: [],
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    const {question, screenIndex} = this.props;
    const {answers, genre} = question;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
          </svg>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form
            className="game__tracks"
            onSubmit={this._handleSubmit}
          >
            {answers.map((answer, i) => {
              return (
                <div
                  className="track"
                  key={`${screenIndex}-answer-${i}`}
                >
                  <button
                    className="track__button track__button--play"
                    type="button"
                  ></button>
                  <div className="track__status">
                    <audio></audio>
                  </div>
                  <div className="game__answer">
                    <input
                      className="game__input visually-hidden"
                      type="checkbox"
                      name={`answer-${i}`}
                      value={answer.genre}
                      id={`answer-${i}`}
                      onChange={this._handleChange}
                    />
                    <label
                      className="game__check"
                      htmlFor={`answer-${i}`}
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
      </section>
    );
  }

  _handleChange(evt) {
    const checkedAnswers = this.state.userAnswers;
    const selectedValue = evt.target.value;

    if (evt.target.checked) {
      checkedAnswers.push(selectedValue);
    } else {
      const valueIndex = checkedAnswers.indexOf(selectedValue);
      checkedAnswers.splice(valueIndex, 1);
    }

    this.setState({
      userAnswers: checkedAnswers
    });
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {onAnswer} = this.props;
    onAnswer(this.state.userAnswers);
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
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
