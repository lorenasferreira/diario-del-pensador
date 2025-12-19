import { useState } from "react";
import AddButton from "../../components/Buttons/BtnAdd/AddButton";
import EditButton from "../../components/Buttons/BtnEdit/EditButton";
import DeleteButton from "../../components/Buttons/BtnDelete/DeleteButton";
import "./QuotesList.css";
import { Link, useNavigate } from "react-router-dom";

const QuotesList = ({ phrases, setPhrases }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás segura de que quieres eliminar esta frase?"
    );

    if (!confirmDelete) return;

    const filteredPhrases = phrases.filter((phrase) => phrase.id !== id);
    setPhrases(filteredPhrases);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
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