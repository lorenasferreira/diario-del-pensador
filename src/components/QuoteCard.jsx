function QuoteCard (props) {
return (
    <div>
        <p>"{props.text}"</p>
        <p>{props.author || "Anonimo"}</p>

        <button>Editar</button>
        <button>Eliminar</button>
    </div>
);
}
export default QuoteCard;