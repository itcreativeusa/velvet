import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container mt-5">
      <div className="signupbox">
        <h2 className="formTitle">Sign Up</h2>
        <form onSubmit={handleFormSubmit} className="user-form2">
          <div className="input-box">
            <label htmlFor="firstName">First Name:</label>
            <input
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="lastName">Last Name:</label>
            <input
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="*********"
              name="password"
              type="password"
              id="pwd"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
