import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const HomePage = () => {
  return (
    <div className="home-page">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default HomePage;
