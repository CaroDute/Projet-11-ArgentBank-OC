import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, profile } from "../features/login/authActions";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Stockage des valeurs dans l'état local
  const navigate = useNavigate();

  const dispatch = useDispatch(); // Permet d'avoir accès à la fonction dispatch pour envoyer des actions au store
  const auth = useSelector((state) => state.auth); // Permet de lire une partie de l'état global du store

  // Lors de la soumission du formulaire, dispatch de l'action login avec les infos d'identifications.
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (auth.token && !auth.error) {
      navigate("/User");
      dispatch(profile());
    }
  }, [auth, dispatch, navigate]);

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
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
      {auth.error && <p>{auth.error}</p>}
    </>
  );
}

export default Login;
