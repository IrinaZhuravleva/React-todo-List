const ToDoList = ({ title, id }) => {

    return (
        <li key={id}>{id}. {title}</li>
    )
}

export default ToDoList;
