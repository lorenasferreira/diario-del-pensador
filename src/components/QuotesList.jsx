/*
import QuoteCard from "../components/QuoteCard";

function QuotesList(props) {
  return (
    <div>
      {props.quotes.map((quote) => (
        <QuoteCard
          key={quote.id}
          text={quote.text}
          author={quote.author}
        />
      ))}
    </div>
  );
}

export default QuotesList;
*/

import { useState } from "react"

const PhrasesList = () => {
    const [phrase, setPhrase] = useState([
        {
            text: "Quien sea feliz también hará feliz a otros",
            autor: "Anne Frank"
        },
        {
            text: "La educación es el arma más poderosa para cambiar el mundo",
            autor: "Nelson Mandela"
        },
        {
            text: "Dormir es distraerse del mundo",
            autor: "Jorge Luis Borges"
        },
        {
            text: "Un día sin reír es un día perdido",
            autor: "Charles Chaplin"
        },
        {
            text: "Sé el cambio que quieres ver en el mundo",
            autor: "Mahatma Gandhi"
        }
    ])
    return (
        <>
            <h2>Frases guardadas</h2>
            <h4>Una colección de pensamientos que quieres tener cerca</h4>
            <button>Mas</button>
            <div></div>
            <div></div>
            <div></div>
        </>


    )
}