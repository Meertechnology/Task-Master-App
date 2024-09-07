import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import LandingPage from './pages/LandingPage';
import TaskForm from './components/TaskForm'; // Import TaskForm
import TaskList from './components/TaskList'; // Import TaskList
import NotFoundPage from './pages/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* LandingPage as home */}
          <Route path="/taskform" element={<TaskForm />} /> {/* TaskForm page */}
          <Route path="/tasklist" element={<TaskList />} /> {/* TaskList page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
