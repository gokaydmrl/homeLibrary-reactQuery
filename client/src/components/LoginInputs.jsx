import React from "react";

const LoginInputs = ({ user, handleSubmit, handleChange }) => {
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          placeholder="user name"
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleChange}
          autoComplete="off"
        />
        <br />
        <br />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          autoComplete="off"
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default LoginInputs;
