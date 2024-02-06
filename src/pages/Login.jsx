import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In!</h2>
        <form className="form loginForm">
          <p className="formErrorMessage">This is an error message</p>
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary">Sign In</button>
        </form>
        <small>Don't have an account? <Link to= "/register">Register Here</Link></small>
      </div>
    </section>
  );
};

export default Login;
