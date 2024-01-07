import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ToDoList from '../ToDoList/ToDoList';

const AllLists = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://todoapiexample-production.up.railway.app/todo_lists');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Вызываем функцию получения данных при монтировании компонента
        return () => {
            setData(null);
        };
    }, []); // Пустой массив зависимостей указывает, что эффект должен выполниться только при монтировании и размонтировании компонента

    return (
        <div>
            {data ? (
                <ul>
                    {data.map(item => (
                        <Link key={item.id} to={`/aba/${item.id}`} title={item.title} id={item.id}>
                            <ToDoList key={item.id} id={item.id} title={item.title} />
                        </Link>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default AllLists;