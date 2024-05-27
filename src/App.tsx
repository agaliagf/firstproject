import { useEffect, useInsertionEffect, useState } from 'react'
import { letters } from './helpers/letters'
import './App.css'
import { HangImage } from './components/HangImag'
import { getRandomWord } from './helpers/getRandomWord'

function App() {
  const [word, setWord] = useState(getRandomWord())
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length))
  const [attempts, setAttemts] = useState(0)
  const [lose, setLose] = useState(false)
  const [won, setWon] = useState(false)

  //determina si a pessoa perdeu
  useInsertionEffect(() => {
    if (attempts >= 9) {
      setLose(true)
    }
  }, [attempts])

  // determinar si a pessoa ganhou.

  useEffect(() => {
    //console.log(hiddenWord)
    const currentHiddenWord = hiddenWord.split(' ').join('')
    if (currentHiddenWord === word) {
      setWon(true)
    }
  }, [hiddenWord, word])

  const checkLetter = (letter: string) => {
    if (lose) {
      return
    }
    if (won) {
      return
    }

    if (!word.includes(letter)) {
      setAttemts(Math.min(attempts + 1, 9))
      return
    }

    const hiddenWordArray = hiddenWord.split(' ')

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter
      }
    }

    setHiddenWord(hiddenWordArray.join(' '))
  }

  const newGame = () => {
    const newWord = getRandomWord()
    setWord(newWord)
    setHiddenWord('_ '.repeat(newWord.length))
    setAttemts(0)
    setLose(false)
    setWon(false)
  }

  return (
    <div className='card'>
      {/* imagenes*/}
      <HangImage imageNumber={attempts} />
      {/* palabra oculta*/}
      <h3>{hiddenWord}</h3>
      {/* contador  de intetos*/}
      <h3> intentos: {attempts}</h3>
      {/* mensaje si perdio  */}
      {lose ? <h2> PERDISTE {word}</h2> : '  '}
      {/* mensaje si gano */}
      {won ? <h2> felicidades, usted gano</h2> : '  '}
      {/* botones de letra*/}
      {letters.map(letter => (
        <button onClick={() => checkLetter(letter)} key={letter}>
          {letter}
        </button>
      ))}
      <br /> <br />
      <button onClick={newGame}>Nuevo juego?</button>
    </div>
  )
}

export default App
