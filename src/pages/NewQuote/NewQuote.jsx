import "./NewQuote.css";
import InitButton from "../components/Buttons/BtnInit/InitButton";
import SaveButton from "../components/Buttons/BtnSave/SaveButton";
import { useActionState, useEffect, useState } from "react";
import QuotesList from "../components/ListPhrases/QuotesList";
import { Link } from "react-router-dom";

const NewQuote = () => {
  const [form, setForm] = useState({ text: "", author: "", etiq:"" });
  const [phrases, setPhrases] = useState([]);
  const [errors, setErrors] = useState({ author: "", text: "", etiq:"" });
  const [started, setStarted] = useState({ author: false, text: false, etiq: false });

  const NewPhrase = (event) => {
    const { name, value} = event.target;
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setStarted({...started, [name]:true});
  };
  console.log(form);

  const SavePhrase = (event) => {
    if (event) event.preventDefault();
    if (errors.text || errors.author || errors.etiq ||form.text === "" || form.author === "" ){
    return alert ("Por favor, corrige los errores antes de guardar.");
    }

    setPhrases([...phrases, form]);
    setForm({ text: "", author: "", etiq: "" });
    setStarted({author:false,text: false})
    alert("¡Frase añadida a la lista!");
  }
  useEffect(() => {
    const CheckAuthor = /^[a-zA-ZÀ-ÿ\s]*$/;
    const CheckPrhase = /^[a-zA-ZÀ-ÿ0-9\s!?]{0,80}$/;
    const CheckEtiq = /^[a-zA-ZÀ-ÿ\s]*$/;

    let newErrors = { author: "", text: "", etiq:"" };

    if (form.text.trim() === "") {
      newErrors.text = " *La frase es obligatoria.";
    } if (form.text.length < 10) {
      newErrors.text = " *Mínimo 10 caracteres.";
    } if (!CheckPrhase.test(form.text)){
      newErrors.text = "*Formato no válido"
    }
    if (form.author.trim() === "") {
      newErrors.author = " *El autor es obligatorio.";
    } if (!CheckAuthor.test(form.author)) {
      newErrors.author = " *Solo se permiten letras.";
    }
    if (!CheckEtiq.test(form.etiq)) {
      newErrors.etiq = " *Solo se permiten letras.";
    }
    setErrors(newErrors);
  }, [form.text, form.author, form.etiq]);

  return (
    <>
      <section className="container-form">
        <form className="form-new" action="">
          <div className="container-title">
            <div>
              <h2>Añadir frase nueva</h2>
              <p className="note">
                Escribe una frase que quieras guardar para tu yo del futuro.
              </p>
            </div>
            <div className="container-btn-init">
              <Link to="/">
              <InitButton />
              </Link>
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
            {started.text && errors.text && <p className="error-msg">{errors.text}</p>}
          </div>
          <div>
            <label htmlFor="">Autor / Autora</label>
            <input
              type="text"
              name="author"
              onChange={NewPhrase}
              value={form.author}
            />
            {started.author && errors.author && <p className="error-msg">{errors.author}</p>}
          </div>
          <div>
            <label htmlFor="">Etiqueta(Opcional)</label>
            <input
              type="text"
              name="etiq"
              onChange={NewPhrase}
              value={form.etiq || ""}
            />
            {started.etiq && errors.etiq && <p className="error-msg">{errors.etiq}</p>}
          </div>
          <SaveButton />
        </form>
        
      </section>
    </>
  );
};

export default NewQuote;

