import "./NewQuote.css";
import InitButton from "../components/Buttons/InitButton";
import SaveButton from "../components/Buttons/SaveButton";
import { useActionState, useEffect, useState } from "react";
import QuotesList from "../components/QuotesList";

const NewQuote = () => {

    const [form, setForm] = useState({text:"" ,author:""})

    const NewPhrase = (event) => {
        setForm({
             ...form,
            [event.target.name]: event.target.value
        })
}
console.log(form)
    const SavePhrase = (event) => {
        event.preventDefault()
        setPhrases([
         ...phrases,
         form
        ])
}

/*const [formData, setFormData] = useState({ text: '', author: '', etiq: '' });
const [errors, setErrors] = useState({ author: '', text: '' });

useEffect(() =>{
    const CheckAuthor= /^[a-zA-ZÀ-ÿ\s]+$/;
    if (formData.author.trim() === ""){
        setErrors(prev => ({...prev, author: "⚠️ El campo de autor es obligatorio."}));
        }
    if (!CheckAuthor.test(formData.author)) {
        setErrors(prev => ({ ...prev, author: "⚠️ Ingresa un nombre válido. No se permiten números ni caracteres especiales." }));
    } else {
        setErrors(prev => ({ ...prev, author: "" }));
         } 
        
    
    if (formData.text.trim() === "") {
         setErrors(prev => ({ ...prev, text: "⚠️ La frase es obligatoria." }));
        } 
    if (formData.text.length < 10){
        setErrors(prev => ({ ...prev, text: "⚠️ La frase debe tener al menos 10 caracteres." }));
    } else {
        setErrors(prev => ({ ...prev, text: "" }));
    }
}, [formData.author, formData.text]);*/

    return (
        <>  
            <section className="container-form">
                <form className="form-new" action="" onSubmit={SavePhrase}>
                    <div className="container-title">
                        <div>
                            <h2>Añadir frase nueva</h2>
                            <p className="note">Escribe una frase que quieras guardar para tu yo del futuro.</p>
                        </div>
                        <div className="container-btn-init"><InitButton/></div>
                    </div>
                    <div className="container-phrase">
                        <label htmlFor="">Frase</label>
                        <textarea name="text" id="" placeholder="Escribe aquí tu frase..." onChange={NewPhrase} ></textarea>
                        <p className="note-input">Mínimo una frase completa, puedes editarla más tarde.</p>
                    </div>
                    <div>
                        <label htmlFor="">Autor / Autora</label>
                        <input type="text" name="author" onChange={NewPhrase}/>
                        <p className="message">mensaje 1</p>
                    </div>
                    <div>
                        <label htmlFor="">Etiqueta(Opcional)</label>
                        <input type="text" name="etiq" onChange={NewPhrase} /> 
                        <p className="message">mensaje2</p>
                    </div>
                    <SaveButton/> 
                </form>
            </section>
        </>
    )
}

export default NewQuote;

/*pattern="[0-9]{9}" ESTE FUNCIONA EN ULTIMO INPUT
pattern="/^[a-zA-ZÀ-ÿ\s]+$/" ESTE PARA EL TEXT TAREA NO*/