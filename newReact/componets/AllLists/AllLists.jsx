import { useEffect, useState } from 'react';
import axios from 'axios';

const AllLists = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://todoapiexample-production.up.railway.app/todo_lists');
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Вызываем функцию получения данных при монтировании компонента

        // Чтобы очистить данные при размонтировании компонента
        return () => {
            setData(null);
        };
    }, []); // Пустой массив зависимостей указывает, что эффект должен выполниться только при монтировании и размонтировании компонента

    return (
        <div>
            {data ? (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {data.map(item => (
                        <li key={item.id}>{item.id}. {item.title} </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default AllLists;