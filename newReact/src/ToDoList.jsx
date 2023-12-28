import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import DoneActions from '../componets/DoneActions/DoneActions';
import ActionsList from '../componets/ActionsList/ActionsList';
import InputNewAction from '../componets/InputNewAction/InputNewAction';
import BtnAddAction from '../componets/BtnAddAction/BtnAddAction';

export default function ToDoList () {

    const [inputValue, setInputValue] = useState('');
    const [actions, setActions] = useState([]);
    const [doneActions, setDoneActions] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        if (inputValue !== '') {
            setActions(actions.concat([inputValue]));
            setInputValue('');
        }
    };

    const moveToCompleted = (e) => {
        setActions(actions.filter(item => item != e.target.dataset.itemText));
        setDoneActions([...doneActions, e.target.dataset.itemText]);
    };

    return (
        <>
            <InputNewAction 
                inputValue={inputValue} 
                handleInputChange={handleInputChange}/>
            <BtnAddAction handleButtonClick={handleButtonClick} />
            <ActionsList 
                actions={actions} 
                moveToCompleted={moveToCompleted}/>
            <hr />
            <DoneActions className="done" doneActions={doneActions}/>
        </>
    )
}
