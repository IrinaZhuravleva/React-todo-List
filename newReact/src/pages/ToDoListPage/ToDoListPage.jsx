import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import AddAction from '../../components/AddAction/AddAction.jsx'
import ActionsList from '../../components/ActionsList/ActionsList';
import DoneActions from '../../components/DoneActions/DoneActions';

const ToDoListPage = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://todoapiexample-production.up.railway.app/todo_lists/${id}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleListUpdate = async () => {
        fetchData();
    };

    useEffect(() => {
        fetchData();
       
        return () => {
            setData(null);
        };
    }, [id]);

    return (
        <>
            { data ?
                (
                    <>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><b>List ID is: </b>{data.id}, <b>List Name is: </b>{data.title}</li>
                        </ul>
                        <AddAction onListUpdate={handleListUpdate} />
                        <ActionsList
                            actions={data.todo_items.filter(item => item.completed === false)}
                            onActionUpdate={handleListUpdate}/>
                        <hr />
                        <DoneActions 
                            className="done" 
                            doneActions={data.todo_items.filter(item => item.completed === true)}
                            onActionUpdate={handleListUpdate} />
                    </>
                )
                : (<p>Loading...</p>)
            }
        </>
    )
}

export default ToDoListPage;
