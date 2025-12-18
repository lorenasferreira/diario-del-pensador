import "./NewQuote.css";
import InitButton from "../components/Buttons/InitButton";
import SaveButton from "../components/Buttons/SaveButton";
import { useActionState, useEffect, useState } from "react";
import QuotesList from "../components/QuotesList";

const NewQuote = () => {
  const [form, setForm] = useState({ text: "", author: "" });
  const [phrases, setPhrases] = useState([]);
  const [errors, setErrors] = useState({ author: "", text: "" });

  const NewPhrase = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  console.log(form);

  const SavePhrase = (event) => {
    if (event) event.preventDefault();
    if (errors.text || errors.author || form.text === "" || form.author === ""){
    return alert ("Por favor, corrige los errores antes de guardar.");
    }
    setPhrases([...phrases, form]);
    setForm({ text: "", author: "", etiq: "" });
    alert("¡Frase añadida a la lista!");
  }
  useEffect(() => {
    const CheckAuthor = /^[a-zA-ZÀ-ÿ\s]*$/;
    const CheckPrhase = /^[a-zA-ZÀ-ÿ0-9\s!?]{0,80}$/;
    let newErrors = { author: "", text: "" };

    if (form.author.trim() === "") {
      newErrors.author = " *El autor es obligatorio.";
    } if (!CheckAuthor.test(form.author)) {
      newErrors.author = " *Solo se permiten letras.";
    }
    if (form.text.trim() === "") {
      newErrors.text = " *La frase es obligatoria.";
    } if (form.text.length < 10) {
      newErrors.text = " *Mínimo 10 caracteres.";
    } if (!CheckPrhase.test(form.text)){
      newErrors.text = "*Formato no válido"
    }
    setErrors(newErrors);
  }, [form.text, form.author]);

  return (
    <>
      <section className="container-form">
        <form className="form-new" action="" onSubmit={SavePhrase}>
          <div className="container-title">
            <div>
              <h2>Añadir frase nueva</h2>
              <p className="note">
                Escribe una frase que quieras guardar para tu yo del futuro.
              </p>
            </div>
            <div className="container-btn-init">
              <InitButton />
            </div>
          </div>
          <div className="container-phrase">
            <label htmlFor="">Frase</label>
            <textarea
              name="text"
              id=""
              placeholder="Escribe aquí tu frase..."
              onChange={NewPhrase}
              value={form.text}
            ></textarea>
            {errors.text && <p className="error-msg">{errors.text}</p>}
            <p className="note-input">
              Mínimo una frase completa, puedes editarla más tarde.
            </p>
          </div>
          <div>
            <label htmlFor="">Autor / Autora</label>
            <input
              type="text"
              name="author"
              onChange={NewPhrase}
              value={form.author}
            />
            {errors.author && <p className="error-msg" >{errors.author}</p>}
            <p className="message">mensaje 1</p>
          </div>
          <div>
            <label htmlFor="">Etiqueta(Opcional)</label>
            <input
              type="text"
              name="etiq"
              onChange={NewPhrase}
              value={form.etiq || ""}
            />
            <p className="message">mensaje2</p>
          </div>
          <SaveButton onSave={SavePhrase} />
        </form>
        
      </section>
    </>
  );
};

export default NewQuote;

