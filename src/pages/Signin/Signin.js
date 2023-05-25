import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    const user = {
      username: username,
      token: "tokennnnn",
    };

    localStorage.setItem("username", JSON.stringify(user));
    navigate("/home");
  };
  return (
    <div className="container view">
      <div className="card">
        <h1>Sign In</h1>
        <h6>
          New user ? <Link to="/">Create an account</Link>
        </h6>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <input
              className="mb-2 mt-2 p-3"
              type="text"
              placeholder="Username or email"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="mb-2 mt-2 p-3"
              type="text"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flexRow">
              <input type="checkbox" id="checkbox" name="checkbox" />
              <label htmlFor="checkbox">Keep me signed in</label>
            </div>
            <button type="submit" className="mt-2 p-3">
              Submit
            </button>
          </div>
        </form>
        <h5 className="text-center">Or Sign In With</h5>
      </div>
    </div>
  );
};

export default Signin;
