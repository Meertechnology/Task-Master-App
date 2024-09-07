import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import Header from '../components/landing-page';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default HomePage;
