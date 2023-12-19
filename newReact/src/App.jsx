/* eslint-disable no-debugger */
import { useState } from 'react'
import { Component1 } from './component1'
import { Title } from '../componets/title'
import { Button } from '../componets/button'

import './App.css'

function App() {
  const arr = ['pear', 'bear', 'beer', 'pier', 'steal', 'steel', 'step']
  const [word, changeWord] = useState(0)

  function changeIndexForward() {
    if (word >= arr.length) {
      return
    }
    if (word < arr.length - 1) {
      changeWord(word + 1)
    }
    if (word < 1) {
      return
    } 
  }

  function changeIndexBackward() {
    if (word > arr.length || word < 1) {
      return
    } 
    if (word <= arr.length - 1) {
      changeWord(word - 1)
    }
  }

  return (
    <>
      <Title title={['title1', 'title2']} word={arr[word]}/>
      <Button func={changeIndexBackward}>Back</Button>
      <Button func={changeIndexForward}>Next</Button>
    </>
  )
}

export default App
