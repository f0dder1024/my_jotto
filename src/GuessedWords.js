import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  const contents =
    props.guessedWord.length === 0 ? (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    ) : null;
  return (
    <div data-test="component-guessed-words">
      <span data-test="guess-instruction">{contents}</span>
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
