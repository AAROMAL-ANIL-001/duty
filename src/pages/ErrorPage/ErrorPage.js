import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/home">Home</Link>
      <Link to="/signin">SignIn</Link>
      <Link to="/signup">SignUp</Link>
    </div>
  );
};

export default ErrorPage;
