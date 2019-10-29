import React from "react";
import PropTypes from "prop-types";
import AudioPlayer from "../audio-player/audio-player.jsx";

class ArtistQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {question, onAnswer} = this.props;
    const {answers, song} = question;
    const {isPlaying} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <AudioPlayer
            isPlaying={isPlaying}
            onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
            src={song.src}
          />
        </div>

        <form className="game__artist">
          {answers.map(({artist, picture}, i) => {
            const answerKey = `artist-${i}`;

            return (
              <div
                className="artist"
                key={`${answerKey}`}
              >
                <input
                  className="artist__input visually-hidden"
                  type="radio"
                  name="answer"
                  value={answerKey}
                  id={answerKey}
                  onChange={() => onAnswer(artist)}
                />
                <label
                  className="artist__name"
                  htmlFor={answerKey}
                >
                  <img
                    className="artist__picture"
                    src={picture}
                    alt={artist}
                  />
                  {artist}
                </label>
              </div>
            );
          })}
        </form>
      </section>
    );
  }
}

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string,
      src: PropTypes.string,
    }),
    type: PropTypes.string
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default ArtistQuestionScreen;
