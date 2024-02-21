import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './ToDoListTitle.css';

export default function CreateNewList() {
  const [post, setPost] = useState({ title: '', id: 0 })
  const [newTitle, setNewTitle] = useState('')

  const handleInputChange = (event) => {
    setNewTitle(event.target.value)
  }

  const createTitle = async (setPost, post) => {
    try {
      const response = await axios.post(
        'https://todoapiexample-production.up.railway.app/todo_lists',
        {
          title: post,
        },
      )
      setPost({ title: response.data.title, id: response.data.id })
    } catch (err) {
      console.log(err)
    }
  }

  const LastTitle = () => {
    // const [isVisible, setIsVisible] = useState(true)

    // useEffect(() => {
    //   const timeoutId = setTimeout(() => {
    //     setIsVisible(false)
    //   }, 10000) // 10 seconds

    //   // Очистка таймера при размонтировании компонента или изменении isVisible
    //   return () => clearTimeout(timeoutId)
    // }, [])

    return (
      <>
        {/* {isVisible && ( */}
          <ul>
            <li>
              You have created a new list which is titled <b>{post.title}</b>
            </li>
          </ul>
        {/* )} */}
      </>
    )
    // };
  }

  return (
    <div>
      <nav>
        <ul className="app-bar container">
          <li>
            <Link to="/">All Lists</Link>
          </li>
        </ul>
      </nav>
      <div className="container" style={{ backgroundColor: '#fff' }}>
        <input
          type="text"
          style={{
            width: '100%',
            border: '0px',
            borderBottom: '1px solid #8b8787',
            marginTop: '40px',
          }}
          onChange={handleInputChange}
          value={newTitle}
          placeholder={'Title'}
        />

        <button
          className="item btn-add"
          onClick={() => {
            newTitle.length < 5
              ? alert(
                  `the title length should be more than 5 symbols ${newTitle.length}`,
                )
              : createTitle(setPost, newTitle)
          }}
        >
          add
        </button>
        {post.title && LastTitle()}
      </div>
    </div>
  )
}
