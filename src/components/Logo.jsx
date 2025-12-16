import logo from "../assets/icons/logo.png";

export default function Logo({ size = 68 }) {
    return (
        <img
        src={logo}
      alt="Logo del Diario del Pensador"
      className="logo-img"
    />
    );
}