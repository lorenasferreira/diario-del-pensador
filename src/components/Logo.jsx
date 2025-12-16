import logo from "../assets/icons/logo.png";

export default function Logo({ size = 48 }) {
    return (
        <img
        src={logo}
        alt="Logo del Diario del Pensador"
        style={{
            width: size,
            height: "auto",
            display: "block"
        }}
    />
    );
}