import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllLists from './components/AllLists/AllLists.jsx';
import ToDoListPage from './pages/ToDoListPage/ToDoListPage.jsx';
import CreateNewList from './components/ToDoListTitle/ToDoListTitle.jsx';
// import ToDoLists from './ToDoLists.jsx'

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
              <Link to="/create-new-title">Create new title</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
          <Route path="/all-lists" element={<AllLists />} />
          <Route path="/create-new-title" element={<CreateNewList />} />
          <Route path="/aba/:id" element={<ToDoListPage />} /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App;
