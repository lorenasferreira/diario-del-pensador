import { useState } from "react";

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
    <section>
      {/* TÍTULO GENERAL (NO SE REPITE) */}
      <h2>Frases guardadas</h2>
      <h4>Una colección de pensamientos que quieres tener cerca</h4>

      <button>Más</button>

      {/* LISTA DE FRASES */}
      {phrases.map((phrase) => (
        <div key={phrase.id}>
          <p>
            “{phrase.text}” — {phrase.author}
          </p>

          <button>Editar</button>
          <button>Eliminar</button>
        </div>
      ))}
    </section>
  );
};

export default QuotesList;