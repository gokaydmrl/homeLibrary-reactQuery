const RegisterInputs = ({ user, handleSubmit, handleChange }) => {
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        placeholder="write your user name"
        type="text"
        name="userName"
        value={user.userName}
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        placeholder="password"
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        autoComplete="off"
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterInputs;
