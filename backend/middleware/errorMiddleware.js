const errorHandler = (err, req, res, next) => {
  // If the status code isn't already set, default to 500 (Internal Server Error)
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  // Log error details (can be extended for production logging)
  console.error(`Error: ${err.message}`);

  // Set the response status and send a structured JSON error response
  res.status(statusCode);
  res.json({
    success: false, // This indicates the request was unsuccessful
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Omit stack trace in production
    timestamp: new Date().toISOString(), // Add a timestamp for when the error occurred
  });
};

export default errorHandler;
