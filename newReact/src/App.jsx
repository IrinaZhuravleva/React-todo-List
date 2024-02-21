import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllLists from './components/AllLists/AllLists.jsx';
import ToDoListPage from './pages/ToDoListPage/ToDoListPage.jsx';
import CreateNewList from './components/ToDoListTitle/ToDoListTitle.jsx';


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
