import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../index.css';
import axios from 'axios';

import InputNewAction from '../InputNewAction/InputNewAction';
import BtnAddAction from '../BtnAddAction/BtnAddAction';

export default function AddAction({ onListUpdate }) {
    const { id } = useParams();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
  
    const handleButtonClick = async () => {
        if (inputValue !== '') {
            try {
                await axios.post(`https://todoapiexample-production.up.railway.app/todo_items`, {
                        "body": inputValue,
                        "todo_list_id": +id
                    });
                setInputValue('');
                onListUpdate();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    return (
        <>
            <InputNewAction 
                inputValue={inputValue} 
                handleInputChange={handleInputChange}/>
            <BtnAddAction handleButtonClick={handleButtonClick} />
        </>
    )
}
