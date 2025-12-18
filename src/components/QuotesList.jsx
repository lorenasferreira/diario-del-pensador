import { useState } from "react";
<<<<<<< HEAD
import EditButton from "./Buttons/EditButton";
import DeleteButton from "./Buttons/DeleteButton";
=======
import AddButton from "./Buttons/AddButton";
import EditButton from "./Buttons/EditButton";
import DeleteButton from "./Buttons/DeleteButton";
import "./QuotesList.css";
import "../../src/index.css";

>>>>>>> 9bd5b8a95921bfe893996c747491e2c825f42c89

const QuotesList = () => {
  const [phrases, setPhrases] = useState([
    {
      id: 1,
      text: "Quien sea feliz también hará feliz a otros",
      author: "Anne Frank",
    },
    {
      id: 2,
      text: "La educación es el arma más poderosa para cambiar el mundo",
      author: "Nelson Mandela",
    },
    {
      id: 3,
      text: "Dormir es distraerse del mundo",
      author: "Jorge Luis Borges",
    },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás segura de que quieres eliminar esta frase?"
    );

    if (!confirmDelete) {
      return;
    }

    const filteredPhrases = phrases.filter((phrase) => phrase.id !== id);

    setPhrases(filteredPhrases);
  };

  const handleEdit = (id) => {
    const phraseToEdit = phrases.find((phrase) => phrase.id === id);
    console.log("Editar frase:", phraseToEdit);
  };

  return (
    <section>
      <h2>Frases guardadas</h2>
      <h4>Una colección de pensamientos que quieres tener cerca</h4>

      {phrases.map((phrase) => (
        <div key={phrase.id}>
          <p>
            “{phrase.text}” — {phrase.author}
          </p>

          <EditButton onClick={() => handleEdit(phrase.id)} />
          <DeleteButton onClick={() => handleDelete(phrase.id)} />
    <>
      <section>
        <div className="container-list">
          <div className="title-header">
            <div className="container-title-list">

              {/* TÍTULO GENERAL (NO SE REPITE) */}
              <h2>Frases guardadas</h2>
              <h4>Una colección de pensamientos que quieres tener cerca</h4>
            </div>
            <div className="container-btn-add"> <AddButton /></div>
          </div>

          {/* LISTA DE FRASES */}
          {phrases.map((phrase) => (
            <div className="container-phrase-save" key={phrase.id}>
              <p className="phrase-save">
                “{phrase.text}” — {phrase.author}
              </p>
              <div className="container-button">
                <EditButton />
                <DeleteButton />
              </div>

            </div>

          ))}
        </div>
      </section >
    </>
  );
};

export default QuotesList;
