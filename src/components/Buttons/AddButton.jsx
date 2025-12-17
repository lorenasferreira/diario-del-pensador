import "./AddButton.css";

const AddButton = () => {
 //Aquí irá el código de ruta para enlazar el formulario
    return (
        <>
            <button className="btn-add">
                <svg width="50" height="50" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
                    <rect width="45" height="45" rx="22.5"/>
                    <path d="M15 22.5H22.5M22.5 22.5H30M22.5 22.5V30M22.5 22.5V15M22.5 39.375C13.1802 39.375 5.625 31.8199 5.625 22.5C5.625 13.1802 13.1802 5.625 22.5 5.625C31.8199 5.625 39.375 13.1802 39.375 22.5C39.375 31.8199 31.8199 39.375 22.5 39.375Z" stroke="#FAF7F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </button>
        </>

    )

}

export default AddButton;