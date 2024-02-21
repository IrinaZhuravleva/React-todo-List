import axios from 'axios'
import circleIcon from './img/CheckCircle.svg'

export default function DoneActions({ doneActions, onActionUpdate }) {
  const toggleTodoItem = async (itemId) => {
    try {
      await axios.patch(
        `https://todoapiexample-production.up.railway.app/todo_items/${itemId}/toggle`,
      )
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const changeActionStatus = async (e) => {
    await toggleTodoItem(e.target.dataset.itemId)
    await onActionUpdate()
  }
  return (
    <>
      {doneActions.length > 0 ? <p>List of completed actions:</p> : null}
      {console.log(doneActions.length)}
      <ul>
        {doneActions &&
          Array.isArray(doneActions) &&
          doneActions.map((item) => (
            <li key={item.id}>
              <label className="item toDoItem">
                {item.body}
                <div className="img-container">
                  <img
                    src={circleIcon}
                    alt="circleIcon"
                    data-item-text={item.body}
                    data-item-id={item.id}
                    onClick={changeActionStatus}
                  />
                </div>
              </label>
            </li>
          ))}
      </ul>
    </>
  )
}
