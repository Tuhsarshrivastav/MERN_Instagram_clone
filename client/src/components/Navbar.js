import React from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const renderList = () => {
    if (state) {
      return [
        <li>
          <Link to="create">Create-Post</Link>
        </li>,
        <li>
          <Link
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              history.push("/login");
            }}
          >
            Logout
          </Link>
        </li>,
        ,
      ];
    } else {
      return [
        <li>
          <Link to="login">Login</Link>
        </li>,
        <li>
          <Link to="register">Register</Link>
        </li>,
      ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper white" style={{ color: "black" }}>
        <Link to={state ? "/" : "/login"} className="brand-logo left logo">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
