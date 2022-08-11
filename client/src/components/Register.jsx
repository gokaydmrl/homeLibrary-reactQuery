import { useState } from "react";
import RegisterInputs from "./RegisterInputs";
import axios from "axios";
import { useNavigate } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GiBookshelf } from "react-icons/gi";
import { useEffect } from "react";
import Login from "./Login";
import LoginInputs from "./LoginInputs";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import Footer from "./Footer";

const Register = () => {
  const navigate = useNavigate();

  const [err, setErr] = useState("");
  const [nameError, setNameError] = useState("");
  const [auth, setAuth] = useState(true);
  // console.log("bu er", err);

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

    if (user.password.length < 6) {
      alert("password must include 6 characters");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/user/register",
        user
      );
      console.log("reg çalıştı");
      if (response.data.error) {
        console.log("error", response);
      } else if (response.status === 201) {
        const token = response.headers.authorization.split(" ")[1];
        localStorage.setItem("token", token);
        console.log("axios resp", response);
        console.log("token", token);
        console.log("rsp data", response.data);
      }

      setUser(response.data);
      navigate("/home", { replace: true });
    } catch (error) {
      console.log("reg error", error);
      setErr(error.response.data.error);
      setNameError(error.response.data.nameError);
    }

    setUser({
      userName: "",
      password: "",
    });
  };

  return (
    <>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(225deg, grey, pink)",
          padding: "50px",
          display: "flex",
          height: "100%",
          paddingBottom: "80px",
        }}
      >
        <div
          style={{
            marginTop: "80px",
            marginLeft: "100px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3>homeLibrary</h3>
          <h2>the most colorful way</h2>
          <h1>to list your books </h1>

          <br />
          <GiBookshelf
            style={{
              display: "flex",
            }}
            size={350}
          />
        </div>
        <div
          style={{
            display: "flex",
            margin: "40px auto auto",
            padding: "50px",
            background: "linear-gradient(135deg, orange, pink)",
            width: "40%",
            borderRadius: "30%",
          }}
        >
          <RegisterInputs
            setAuth={setAuth}
            nameError={nameError}
            err={err}
            user={user}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
