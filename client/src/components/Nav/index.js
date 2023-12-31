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
              <Link className="name nav-link" id="welcomeMessage" to="/">
                Welcome, {user.firstName} {user.lastName}
              </Link>
            )}
          </li>

          <li className="li">
            <Link className="nav-link" to="/orderHistory">
              <button className="btn">View Orders</button>
            </Link>
          </li>
          <li className="li">
            <a href="/" onClick={() => Auth.logout()}>
              <button className="btn">Logout</button>
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div>
          <ul className="flex-row navbar">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                <button className="btn">SIGN UP</button>
              </Link>
            </li>
            <li className="mx-1">
              <Link className="nav-link" to="/login">
                <button className="btn">LOG IN</button>
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <header className="container-fluid navigation">
      <div className="flex-row navbar navbar-expand-lg">
        <Link className="logo navbar-brand" to="/">
          Velvet
        </Link>

        <nav>{showNavigation()}</nav>
      </div>
    </header>
  );
}

export default Nav;
