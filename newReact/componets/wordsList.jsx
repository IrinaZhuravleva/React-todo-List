import { useState } from 'react'
import { Title } from './title'
import { Button } from './button'

export const WordsList = () => {
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
            <Title title={['title1', 'title2']} word={arr[word]} />
            <Button func={changeIndexBackward}>Back</Button>
            <Button func={changeIndexForward}>Next</Button>
        </>
    )
}