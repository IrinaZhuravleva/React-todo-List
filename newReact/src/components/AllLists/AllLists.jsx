import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteList } from '../../api/api.jsx'
import axios from 'axios'

import ToDoList from '../ToDoList/ToDoList'
import './AllLists.css'
import pencilIcon from './img/Pencil.png'
// import circleIcon from './img/CheckCircle.png'
import trashIcon from './img/Trash.png'

const AllLists = () => {
  const [data, setData] = useState(null)

  const deleteListFromPage = async (e) => {
    console.log(e.target.dataset.itemId)
    await deleteList(e.target.dataset.itemId)
    await handleListsUpdate()
  }

  const fetchListsData = async () => {
    try {
      const response = await axios.get(
        'https://todoapiexample-production.up.railway.app/todo_lists',
      )
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleListsUpdate = async () => {
    fetchListsData()
  }

  useEffect(() => {
    fetchListsData();
    return () => {
      setData(null)
    }
  }, []) // Пустой массив зависимостей указывает, что эффект должен выполниться только при монтировании и размонтировании компонента

  return (
    <div>
      <nav>
        <ul className="app-bar container">
          <li>
            <Link to="/">All Lists</Link>
          </li>
          <li>
            <Link to="/create-new-title" className="create-new">
              <svg
                width="22"
                height="25"
                viewBox="0 0 22 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5.54688V19.3281M4.875 12.4375H17.125H4.875Z"
                  stroke="#9295D2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
      {data ? (
        <ul className="container">
          {data.map((item) => (
            <div
              key={item.id}
              className="item toDoItem"
              title={item.title}
              id={item.id}
            >
              <ToDoList key={item.id} title={item.title} id={item.id} />

              <div className="img-container">
                <Link to={`/${item.id}`}>
                  <img src={pencilIcon} alt="pencilIcon" />
                </Link>
                <img
                  src={trashIcon}
                  alt="trashIcon"
                  data-item-id={item.id}
                  onClick={deleteListFromPage}
                />
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default AllLists
