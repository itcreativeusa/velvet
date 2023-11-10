/* Component */
import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

function Nav(props) {
  const { data: userData } = useQuery(QUERY_USER);
  const user = userData?.user;

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="navbar">
          <li className="li">
            {user && (
              <Link className="logo" id="welcomeMessage" to="/">
                Welcome, {user.firstName} {user.lastName}
              </Link>
            )}
          </li>

          <li className="li">
            <Link to="/orderHistory">
              <button className="btn btn-primary">View Orders</button>
            </Link>
          </li>
          <li className="li">
            <a href="/" onClick={() => Auth.logout()}>
              <button className="btn btn-danger">Logout</button>
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="flex-row">
          <Link className="logo" to="/">
            Velvet
          </Link>

          <div className="auth">
            <ul className="flex-row">
              <li>
                <Link to="/signup">
                  <button className="btn btn-success">SIGN UP</button>
                </Link>
              </li>
              <li className="mx-1">
                <Link to="/login">
                  <button className="btn btn-primary">LOG IN</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }

  return (
    <header className="container">
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
