import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { logout, checkLocalStorageToken } from "../features/login/authSlice";
import { useEffect } from "react";
import { profile } from "../features/login/authActions";

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isAuthenticated = auth.isAuthenticated;

  useEffect(() => {
    // Vérification du token en local
    dispatch(checkLocalStorageToken()); // Si token récupéré alors isAuthenticated
    dispatch(profile())
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <NavLink to="/">
        <Logo
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isAuthenticated ? (
          <>
            <NavLink to="/User" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {auth.firstName}
            </NavLink>
            <NavLink onClick={handleLogout} to="/" className="main-nav-item">
              <i className="fa fa-sign-out"></i> Sign Out
            </NavLink>
          </>
        ) : (
          <NavLink to="/Login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;
