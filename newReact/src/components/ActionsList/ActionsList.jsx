import axios from 'axios';

export default function ActionsList({ actions, onActionUpdate }){

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
        <ul>
            {Array.isArray(actions) && actions.map(item => {
                return (

                    <li key={item.id}>
                            <label style={{cursor:"pointer"}}>
                            {item.body}
                                <input type="checkbox" 
                                data-item-text={item.body}
                                data-item-id={item.id}
                                onChange={changeActionStatus}
                                    >
                                </input>
                            </label>
                        </li> 
                    )
                }
            )}
        </ul>
    )
}
