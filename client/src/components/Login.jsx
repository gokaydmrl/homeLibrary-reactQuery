import axios from "axios";
import React from "react";
import LoginInputs from "./LoginInputs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [pswError, setPswError] = useState("");
  const [nameError, setNameError] = useState("");

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
      const response = await axios.post(
        "http://localhost:3001/user/login",
        user
      );
      if (response.status === 400) {
        console.log("error", response);
        console.log(response.data);
        return;
      } else {
        console.log("başarılı resp ", response);
        const token = response.headers.authorization.split(" ")[1];
        console.log("başr resp token", token);
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem("token", token);

        console.log("resp head", response.headers);
        console.log("rsp data token", response.data.token);
        console.log("token", token);
        console.log("rsp data", response.data);
        console.log("tkn", token);
        setUser({
          userName: "",
          password: "",
        });
      }
      navigate("../home", { replace: true });
      setUser(response.data);
    } catch (error) {
      console.log(error);
      console.log("login err resp: ", error.response.data);
      setPswError(error.response.data.pswError);
      setNameError(error.response.data.nameError);
      console.log("pswerr", pswError);
    }
  };

  return (
    <div>
      <LoginInputs
        nameError={nameError}
        pswError={pswError}
        user={user}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Login;
