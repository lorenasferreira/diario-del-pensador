import "./NewQuote.css";
import InitButton from "../components/Buttons/InitButton";
import SaveButton from "../components/Buttons/SaveButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewQuote = ({ initialData, onSubmit, isEditing }) => {
  const [form, setForm] = useState(
    initialData || { text: "", author: "", etiq: "" }
  );

  const [errors, setErrors] = useState({
    text: "",
    author: "",
    etiq: "",
  });

  const [started, setStarted] = useState({
    text: false,
    author: false,
    etiq: false,
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStarted((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  useEffect(() => {
    const CheckAuthor = /^[a-zA-ZÀ-ÿ\s]*$/;
    const CheckPhrase = /^[a-zA-ZÀ-ÿ0-9\s!?]{0,80}$/;
    const CheckEtiq = /^[a-zA-ZÀ-ÿ\s]*$/;

    let newErrors = { text: "", author: "", etiq: "" };

    if (form.text.trim() === "") {
      newErrors.text = "*La frase es obligatoria.";
    } else if (form.text.length < 10) {
      newErrors.text = "*Mínimo 10 caracteres.";
    } else if (!CheckPhrase.test(form.text)) {
      newErrors.text = "*Formato no válido.";
    }

    if (form.author.trim() === "") {
      newErrors.author = "*El autor es obligatorio.";
    } else if (!CheckAuthor.test(form.author)) {
      newErrors.author = "*Solo se permiten letras.";
    }

    if (!CheckEtiq.test(form.etiq)) {
      newErrors.etiq = "*Solo se permiten letras.";
    }

    setErrors(newErrors);
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.text || errors.author || errors.etiq) {
      alert("Por favor, corrige los errores antes de guardar.");
      return;
    }

    onSubmit(form);
  };

  return (
    <section className="container-form">
      <form className="form-new" onSubmit={handleSubmit}>
        <div className="container-title">
          <div>
            <h2>{isEditing ? "Editar frase" : "Añadir nueva frase"}</h2>
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
          <label>Frase</label>
          <textarea
            name="text"
            placeholder="Escribe aquí tu frase..."
            value={form.text}
            onChange={handleChange}
          />
          {started.text && errors.text && (
            <p className="error-msg">{errors.text}</p>
          )}
        </div>

        <div>
          <label>Autor / Autora</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
          />
          {started.author && errors.author && (
            <p className="error-msg">{errors.author}</p>
          )}
        </div>

        <div>
          <label>Etiqueta (opcional)</label>
          <input
            type="text"
            name="etiq"
            value={form.etiq}
            onChange={handleChange}
          />
          {started.etiq && errors.etiq && (
            <p className="error-msg">{errors.etiq}</p>
          )}
        </div>

        <SaveButton />
      </form>
    </section>
  );
};

export default NewQuote;
