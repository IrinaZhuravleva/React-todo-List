import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import AllLists from './componets/AllLists/AllLists.jsx';
import ToDoList from './componets/AllLists/AllLists.jsx';
import ToDoLists from './ToDoLists.jsx'
// import CreateNewList from '../componets/ToDoListTitle/ToDoListTitle.jsx'

import './App.css'

function App() {
  

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/all-lists">All Lists</Link>
            </li>
            <li>
              <Link to="/to-do-lists">ToDoLists</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
          <Route path="/all-lists" element={<AllLists />} />
          <Route path="/to-do-lists" element={<ToDoLists />} />
          {/* <Route path="/to-do-lists/:id" element={<ToDoList />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
