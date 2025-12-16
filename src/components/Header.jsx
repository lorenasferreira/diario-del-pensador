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

        <div className="subtitle">
          <Link to="/" className="title-link">
            <h1 className="header-title">DIARIO DEL PENSADOR</h1>
          </Link>
          <p>Frases para pensar, sentir y guardar.</p>
        </div>
      </div>
      <div className="header-text">
        <p className="header-greeting">Hola, Mandy!</p>
        <div className="header-avatar">
          <img src="/mandy.png" alt="Foto de Mandy" />
        </div>
      </div>
    </header>
  );
}
