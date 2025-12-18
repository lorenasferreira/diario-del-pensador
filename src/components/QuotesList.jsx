import { useState } from "react";
import AddButton from "./Buttons/AddButton";
import EditButton from "./Buttons/EditButton";
import DeleteButton from "./Buttons/DeleteButton";
import "./QuotesList.css";
import "../../src/index.css";


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

  return (
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