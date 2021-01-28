import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page section">
      <div className="error-container">
        <h2>Oops! it's a dead end!</h2>
        <Link className="btn btn-primary" to="/">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
