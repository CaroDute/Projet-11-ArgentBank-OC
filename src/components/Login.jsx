import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/login/authActions";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ username, password }));
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
      {/* <NavLink to="/User" className="sign-in-button">
        Sign In
      </NavLink> */}
      <button type="submit" className="sign-in-button">
        {" "}
        Sign In{" "}
      </button>
      {/* <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button class="sign-in-button">Sign In</button> -->
          <!--  --> */}
    </form>
    {auth.error && <p>{auth.error}</p>}
    </>
  );
}

export default Login;
