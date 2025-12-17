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

const QuotesList = () => {
    const [phrase, setPhrase] = useState([
        {
          id:1,
            text: "Quien sea feliz también hará feliz a otros",
            autor: "Anne Frank"
        },
        {
          id:2,
            text: "La educación es el arma más poderosa para cambiar el mundo",
            autor: "Nelson Mandela"
        },
        {
          id:3,
            text: "Dormir es distraerse del mundo",
            autor: "Jorge Luis Borges"
        },
        {
          id:4,
            text: "Un día sin reír es un día perdido",
            autor: "Charles Chaplin"
        },
        {
          id:5,
            text: "Sé el cambio que quieres ver en el mundo",
            autor: "Mahatma Gandhi"
        },
    ])
    return (
        <>
          {
            phrase.map((phrase, index) => (
              <div key={phrase,index}>
                <h2>Frases guardadas</h2>
                <h4>Una colección de pensamientos que quieres tener cerca</h4>
                <button>Mas</button>
                

                <div key={phrase.id1}>
                  <p>{phrase.text} {phrase.autor} </p>
                  <button></button>
                  <button></button>
                </div>

                   <div key={phrase.id2}>
                  <p>{phrase.text} {phrase.autor} </p>
                  <button></button>
                  <button></button>
                </div>

                  <div key={phrase.id3}>
                  <p>{phrase.text} {phrase.autor} </p>
                  <button></button>
                  <button></button> 
                  
                 <div key={phrase.id4}>
                <p>{phrase.text} {phrase.autor} </p>
              </div>
               </div>
            )
         

        </>


    )
}*/</>