import { Link, useParams } from 'react-router-dom';
 
 const ToDoList = ({id, title}) => {
    //  const { id } = useParams();
    return (
        <Link key={id} to={`/all-lists/${id}`}>
            <li key={id}>{id}. {title}</li>
        </Link>
    )
}

export default ToDoList;
