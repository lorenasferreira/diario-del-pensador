import Logo from "./Logo";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo-link">
          <Logo size={56} />
        </Link>

        <div className="header-text">
          <p className="header-greeting">Buenos días, Mandy</p>
          <h1 className="header-title">Frases guardadas</h1>
        </div>
      </div>

      <div className="header-avatar">
        <img src="/mandy.png" alt="Foto de Mandy" />
      </div>
    </header>
  );
}
