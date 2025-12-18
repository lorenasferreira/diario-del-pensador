import "./SaveButton.css";

const SaveButton = ({onSave}) => {
    
    return (
        <>
            <button className="btn-save" onClick={onSave}>Guardar frase </button>
        </>
    );
};

export default SaveButton;

