
/**
 * @method getLetterMatchCount
 * @param {*} guessedWord - Guessed word
 * @param {*} secretWord - Secret word.
 */
const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}

export  {getLetterMatchCount};