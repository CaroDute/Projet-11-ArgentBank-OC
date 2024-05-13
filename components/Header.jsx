import Logo from "./Logo";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <Logo
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/Sign" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
