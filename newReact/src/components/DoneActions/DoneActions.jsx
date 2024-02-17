import axios from 'axios';
// import {toggleTodoItem} from '../ActionsList/ActionsList';

export default function DoneActions({ doneActions, onActionUpdate }) {
    const toggleTodoItem = async (itemId) => {
        try {
            await axios.patch(`https://todoapiexample-production.up.railway.app/todo_items/${itemId}/toggle`);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const changeActionStatus = async (e) => {
        await toggleTodoItem(e.target.dataset.itemId);
        await onActionUpdate();
    };
    return (
        <>
            {!doneActions ? <p>List of completed actions:</p> : null}      
            <ul>
                { doneActions && 
                    Array.isArray(doneActions) && 
                    doneActions.map(item => (
                            <li key={item.id}>
                                <label>
                                    {item.body}
                                    <input type="checkbox"
                                        checked
                                        style={{ cursor: "pointer" }}
                                            data-item-id={item.id}
                                            onChange={changeActionStatus}
                                        >
                                    </input>
                                </label>
                            </li> 
                        )
                    )
                }
            </ul>
        </>
    );
}
