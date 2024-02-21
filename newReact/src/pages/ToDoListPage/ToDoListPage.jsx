import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

import AddAction from '../../components/AddAction/AddAction.jsx'
import ActionsList from '../../components/ActionsList/ActionsList'
import DoneActions from '../../components/DoneActions/DoneActions'

const ToDoListPage = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://todoapiexample-production.up.railway.app/todo_lists/${id}`,
      )
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleListUpdate = async () => {
    fetchData()
  }

  useEffect(() => {
    fetchData()

    return () => {
      setData(null)
    }
  }, [id])

  return (
    <div>
      <nav>
        <ul className="app-bar container">
          <li>
            <Link to="/">All Lists</Link>
          </li>
          {/* <li>
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
          </li> */}
        </ul>
      </nav>

      {data ? (
        <div className="container">
          <ul style={{ listStyleType: 'none' }}>
            <li><b>List Name is: </b>{data.title}</li>
          </ul>
          <AddAction onListUpdate={handleListUpdate} />
          <ActionsList
            actions={data.todo_items.filter((item) => item.completed === false)}
            onActionUpdate={handleListUpdate}
          />
          <hr />
          <DoneActions
            className="done"
            doneActions={data.todo_items.filter(
              (item) => item.completed === true,
            )}
            onActionUpdate={handleListUpdate}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ToDoListPage
