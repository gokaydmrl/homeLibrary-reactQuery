import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const NoToken = () => {
  const token = localStorage.getItem("token");
  return (
    <div
      style={{
        marginTop: "20px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h3>homeLibrary</h3>
      if you have an account please
      <Link to="/login"> login</Link> <br />
      if you dont have an account, to be able to start using homeLibrary please
      <Link to="/register"> register</Link> <br />
      {token && <Link to="/home"> you are already logged in go to home </Link>}
    </div>
  );
};

export default NoToken;
