import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoList from './ToDoList.jsx'
import CreateNewList from '../componets/ToDoListTitle/ToDoListTitle.jsx'
import AllLists from '../componets/AllLists/AllLists.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ToDoList /> */}
    {/* <CreateNewList /> */}
    <AllLists />
  </React.StrictMode>,
)
