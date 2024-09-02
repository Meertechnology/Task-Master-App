import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container text-center">
      <h1 className="display-4">
        <i className="bi bi-exclamation-triangle"></i> 404 - Page Not Found
      </h1>
      <p className="lead">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        <i className="bi bi-house"></i> Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
