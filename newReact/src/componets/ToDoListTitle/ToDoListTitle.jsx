import {useState, useEffect } from 'react';
import { createTitle } from '../../api/api';

export default function CreateNewList() {
    const [post, setPost] = useState({title: '', id: 0});
    const [newTitle, setNewTitle] = useState('');

    const handleInputChange = (event) => {
        setNewTitle(event.target.value);
    };

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
                post.title.length < 5 
                    ? alert('the title length should be more than 5 symbols') 
                    : createTitle(setPost, newTitle)
            }}>Create New Title</button>
            {post.title && LastTitle()}
        </>
    )
}