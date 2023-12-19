/* eslint-disable no-debugger */
import { WordsList } from '../componets/wordsList'

import './App.css'

function App() {
  const base = [{
    id: 1,
    question: 'лес',
    answer: 'forest'
  }, {
      id: 2,
      question: 'гора',
      answer: 'mountain'
    }, {
      id: 3,
      question: 'мельница',
      answer: 'mill'
    }];
  return (
    <WordsList />
  )
}

export default App
