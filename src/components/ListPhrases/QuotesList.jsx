import { useState } from "react";
import AddButton from "../Buttons/BtnAdd/AddButton";
import EditButton from "../Buttons/BtnEdit/EditButton";
import DeleteButton from "../Buttons/BtnDelete/DeleteButton";
import "./QuotesList.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


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
    {
      id: 4,
      text: "Un día sin reír es un día perdido",
      author: "Charles Chaplin",
    },
    {
      id: 5,
      text: "Sé el cambio que quieres ver en el mundo",
      author: "Mahatma Gandhi",
    },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás segura de que quieres eliminar esta frase?"
    );

    if (!confirmDelete) return;

    const filteredPhrases = phrases.filter((phrase) => phrase.id !== id);

    setPhrases(filteredPhrases);
  };

  const handleEdit = (id) => {
    const phraseToEdit = phrases.find((phrase) => phrase.id === id);
    console.log("Editar frase:", phraseToEdit);
  };

  return (
    <section>
      <div className="container-list">
        <div className="title-header">
          <div className="container-title-list">
            <h2>Frases guardadas</h2>
            <h4>Una colección de pensamientos que quieres tener cerca</h4>
          </div>

          <div className="container-btn-add">
            <Link to="/new">
              <AddButton />
            </Link>
          </div>
        </div>

        {phrases.map((phrase) => (
          <div className="container-phrase-save" key={phrase.id}>
            <p className="phrase-save">
              “{phrase.text}” — {phrase.author}
            </p>

            <div className="container-button">
              <EditButton onClick={() => handleEdit(phrase.id)} />
              <DeleteButton onClick={() => handleDelete(phrase.id)} />
            </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default QuotesList;
