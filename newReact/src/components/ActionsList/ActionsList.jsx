import { toggleTodoItem, deleteItem } from '../../api/api.jsx'
// import pencilIcon from './img/Pencil.png'
import circleIcon from './img/CheckCircle.png'
import trashIcon from './img/Trash.png'

export default function ActionsList({ actions, onActionUpdate }) {
  const changeActionStatus = async (e) => {
    await toggleTodoItem(e.target.dataset.itemId)
    await onActionUpdate()
  }

  const deleteItemFromList = async (e) => {
    await deleteItem(e.target.dataset.itemId)
    await onActionUpdate()
  }

  return (
    <ul>
      {Array.isArray(actions) &&
        actions.map((item) => {
          return (
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
                  {/* <img src={pencilIcon} alt="" /> */}
                  <img
                    src={trashIcon}
                    alt="trashIcon"
                    data-item-text={item.body}
                    data-item-id={item.id}
                    onClick={deleteItemFromList}
                  />
                </div>
                {/* <input type="checkbox"
                                    style={{ cursor: "pointer" }}
                                    data-item-text={item.body}
                                    data-item-id={item.id}
                                    onChange={changeActionStatus}
                                    >
                                </input>
                                <button
                                    style={{
                                        cursor: "pointer",
                                        marginLeft: "15px",
                                        backgroundColor: "black",
                                        color: "white"
                                    }}
                                    data-item-text={item.body}
                                    data-item-id={item.id}
                                    onClick={deleteItemFromList}
                                >DELETE
                                </button> */}
              </label>
            </li>
          )
        })}
    </ul>
  )
}
