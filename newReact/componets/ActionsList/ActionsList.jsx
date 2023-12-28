export default function ActionsList({ actions, moveToCompleted }){
return (
    <ul>
        {Array.isArray(actions) && actions.map(item => {
            return (
                <li key={item}>
                    <label style={{cursor:"pointer"}}>
                        {item}
                        <input type="checkbox" 
                            data-item-text={item} 
                            onChange={moveToCompleted}>
                        </input>
                    </label>
                </li>  
            )
            }
        )}
    </ul>
    )
}
