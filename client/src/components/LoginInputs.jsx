import React from "react";

const LoginInputs = ({
  user,
  handleSubmit,
  handleChange,
  pswError,
  nameError,
}) => {
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
        {nameError !== "" && nameError}

        <br />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          autoComplete="off"
        />
        {pswError !== "" && pswError}

        <button>Log in</button>
      </form>
    </div>
  );
};

export default LoginInputs;
