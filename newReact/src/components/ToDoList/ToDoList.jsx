const ToDoList = ({ title, id }) => {

    return (
        <li key={id}>{title}</li>
    )
}

export default ToDoList;
