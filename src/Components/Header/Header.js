import React, { useContext, useState } from "react";
import { userContext } from "../../App";
import "./Header.css";
import logo from "./logo.png";

function Header() {
  const { user, setUser } = useContext(userContext);
  const [loginID, setLoginID] = useState("");

  const loginHandler = (evt) => {
    alert("You are logged in");
    evt.preventDefault();
    setUser(loginID);
  };

  const logoutHandler = (evt) => {
    alert("You are logged out");
    evt.preventDefault();
    setUser(null);
  };

  const changeHandler = (evt) => {
    setLoginID(evt.target.value);
  };

  function showLogin() {
    return (
      <form onSubmit={loginHandler}>
        <input
          type="text"
          placeholder="User Name"
          value={loginID}
          onChange={changeHandler}
        />
        <button>Log In</button>
      </form>
    );
  }

  function showLogout() {
    return (
      <form onSubmit={logoutHandler}>
        <label className="welcome-text">Welcome {user}</label>
        <button>Log Out</button>
      </form>
    );
  }

  return (
    <header>
      <img src={logo}></img>
      {!user ? showLogin() : showLogout()}
    </header>
  );
}

export default Header;
