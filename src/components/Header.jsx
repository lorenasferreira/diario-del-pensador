import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/">
            <Logo size={56} />
            </Link>

            <nav>
                <Link to="/">Frases</Link>
                <Link to="/new">Nueva frase</Link>
            </nav>
        </header>
    );
}