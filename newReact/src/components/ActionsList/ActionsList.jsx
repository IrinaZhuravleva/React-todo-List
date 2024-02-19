import { toggleTodoItem, deleteItem } from '../../api/api.jsx'

export default function ActionsList({ actions, onActionUpdate }){

    

    const changeActionStatus = async (e) => {
        await toggleTodoItem(e.target.dataset.itemId);
        await onActionUpdate();
    };

    const deleteItemFromList = async (e) => {
        await deleteItem(e.target.dataset.itemId);
        await onActionUpdate();
    }

return (
        <ul>
            {Array.isArray(actions) && actions.map(item => {
                return (

                    <li key={item.id}>
                            <label>
                            {item.body}
                                <input type="checkbox"
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
                                </button>
                            </label>
                        </li> 
                    )
                }
            )}
        </ul>
    )
}
