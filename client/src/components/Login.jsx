import axios from "axios";
import React from "react";
import LoginInputs from "./LoginInputs"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this login user", user);

    try {
      const response = await axios.post("http://localhost:3001/user/login", user);
      const token = response.headers.authorization.split(" ")[1];
      // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);

      console.log("resp status", response.status);
      console.log("rsp data token", response.data.token);
      console.log("token", token);
      console.log("rsp data", response.data);
      console.log("tkn", token);
      navigate("../home", { replace: true });

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }

    setUser({
      userName: "",
      password: "",
    });
  };

  return (
    <div>
      <LoginInputs
        user={user}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Login;
