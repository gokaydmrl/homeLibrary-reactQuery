import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import LoginIcon from "./LoginIcon";

const LoginInputs = ({
  user,
  handleSubmit,
  handleChange,
  pswError,
  nameError,
}) => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(225deg, grey, pink)",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, orange, pink)",
            padding: "40px",
            borderRadius: "80px",
            width: "60%",
            alignItems: "center",
            justifyContent: "center",
            margin: "40px auto",
          }}
        >
          <h2 style={{ textAlign: "center" }}>homeLibrary</h2>
          <LoginIcon />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Form
              style={{ width: "30%" }}
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3">
                <Form.Label
                  style={{
                    margin: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  user name
                </Form.Label>
                <Form.Control
                  placeholder="user name"
                  type="text"
                  name="userName"
                  value={user.userName}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </Form.Group>

              <p
                style={{
                  textAlign: "center",
                }}
              >
                {" "}
                {nameError !== "" && nameError}{" "}
              </p>

              <Form.Group className="mb-3">
                <Form.Label
                  style={{
                    margin: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  password
                </Form.Label>
                <Form.Control
                  placeholder="password"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  {pswError !== "" && pswError}{" "}
                </p>
              </Form.Group>

              <Button type="submit">Login</Button>
              <br />
              <Link to="/register">
                <p
                  style={{
                    float: "right",
                  }}
                >
                  Create an account.
                </p>
              </Link>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginInputs;
