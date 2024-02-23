import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllLists from './pages/AllListsPage/AllListsPage.jsx';
import ToDoListPage from './pages/ToDoListPage/ToDoListPage.jsx';
import CreateNewList from './pages/CreateNewListPage/CreateNewListPage.jsx'


import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllLists />} />
        <Route path="/create-new-title" element={<CreateNewList />} />
        <Route path="/:id" element={<ToDoListPage />} />
        {/* <Route path="/:id" element={<CreateNewTodo />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
