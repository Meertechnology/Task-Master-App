// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'; // Assuming you have custom CSS here


const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
