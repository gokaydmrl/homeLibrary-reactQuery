import React from "react";
import { useState } from "react";
import RegisterInputs from "./RegisterInputs";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this is user", user);

    try {
      const response = await axios.post(
        "http://localhost:3001/user/register",
        user
      );
      if (response.status === 201) {
        const token = response.headers.authorization.split(" ")[1];
        localStorage.setItem("token", token);
        localStorage.setItem("userID", response.data.userID);
        console.log("axios resp", response);
        console.log("token", token);
        console.log("rsp data", response.data);
      }
      setUser(response.data);
      navigate("/home", { replace: true });
    } catch (error) {
      console.log("err while registering", error);
    }

    setUser({
      userName: "",
      password: "",
    });
  };

  return (
    <div>
      <RegisterInputs
        user={user}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Register;
