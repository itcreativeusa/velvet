import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

import "bootstrap/dist/css/bootstrap.min.css";
import "https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:wght@300;700;800&display=swap";

function Nav(props) {
  const { data: userData } = useQuery(QUERY_USER);
  const user = userData?.user;

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="navbar">
          <li className="li">
            {user && (
              <h2 id="welcomeMessage">
                Welcome, {user.firstName} {user.lastName}
              </h2>
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
        <header className="flex-row ">
          <nav>
            <ul className="flex-row">
              <li className="mx-1">
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
          </nav>
        </header>
      );
    }
  }

  return (
    <header>
      <h1
        button
        type="button"
        onClick={() => window.location.reload()}
        className="title"
      >
        <Link to="/">Velvet</Link>
      </h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
