import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn waves-effect waves-light #1976d2 blue darken-2">
          Login
        </button>
        <h5>
          <Link to="/register">Don't have an account</Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
