import { useState } from 'react';
import axios from 'axios';

export default function CreateNewList() {
    const [post, setPost] = useState({title: '', id: 0});
    const [newTitle, setNewTitle] = useState('');

    const handleInputChange = (event) => {
        setNewTitle(event.target.value);
        // и надо как-то очистить поле ввода
    };

    const createTitle = async (setPost, post) => {
        try {
            const response = await axios.post('https://todoapiexample-production.up.railway.app/todo_lists',
                {
                    title: post
                });
            setPost({ title: response.data.title, id: response.data.id });
            console.log(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const LastTitle = () => {
        return (
            <ul>
                <li>You have created a new list which is titled <b>{post.title}</b></li>
            </ul>
        )
    }

    return (
        <>
            <input type="text" 
                style={{width: "300px"}}
                onChange={handleInputChange} 
                value={newTitle}
                placeholder={'Type in a title for your new list'} />
            <button onClick={() => {
                newTitle.length < 5 
                    ? alert(`the title length should be more than 5 symbols ${newTitle.length}`) 
                    : createTitle(setPost, newTitle)
            }}>Create New Title</button>
            {post.title && LastTitle()}
        </>
    )
}