import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center my-5 py-3">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
