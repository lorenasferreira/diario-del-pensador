import "./NewQuote.css";
import InitButton from "../components/Buttons/InitButton";
import SaveButton from "../components/Buttons/SaveButton";

const NewQuote = () => {
 //Aquí irá el código del formulario
    return (
        <>  
            <section className="container-form">
                <form className="form-new" action="">
                    <div className="container-title">
                        <div>
                            <h2>Añadir frase nueva</h2>
                            <p className="note">Escribe una frase que quieras guardar para tu yo del futuro.</p>
                        </div>
                        <div className="container-btn-init"><InitButton/></div>
                    </div>
                    <div className="container-phrase">
                        <label htmlFor="">Frase</label>
                        <textarea name="" id="" placeholder="Escribe aquí tu frase..."></textarea>
                        <p className="note-input">Mínimo una frase completa, puedes editarla más tarde.</p>
                    </div>
                    <div>
                        <label htmlFor="">Autor / Autora</label>
                        <input type="text"/>
                        <p className="message">mensaje 1</p>
                    </div>
                    <div>
                        <label htmlFor="">Etiqueta(Opcional)</label>
                        <input type="text"/>
                        <p className="message">mensaje2</p>
                    </div>
                    <SaveButton/> 
                </form>
            </section>
        </>
    )
}

export default NewQuote;