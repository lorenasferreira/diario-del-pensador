import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import QuotesList from "./components/ListPhrases/QuotesList";
import CreateNewPhrase from "./pages/CreateNewPhrase";
import NewQuote from "./pages/NewQuote/NewQuote";

function App() {
  const [phrases, setPhrases] = useState([
    {
      id: 1,
      text: "Quien sea feliz también hará feliz a otros",
      author: "Anne Frank",
      etiq: "",
    },
    {
      id: 2,
      text: "La educación es el arma más poderosa para cambiar el mundo",
      author: "Nelson Mandela",
      etiq: "",
    },
    {
      id: 3,
      text: "Un día sin reír es un día perdido",
      author: "Charles Chaplin",
    },
    {
      id: 4,
      text: "Sé el cambio que quieres ver en el mundo",
      author: "Mahatma Gandhi",
    },
    

  ]);

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <QuotesList
                  phrases={phrases}
                  setPhrases={setPhrases}
                />
              }
            />

            <Route
              path="/new"
              element={
                <CreateNewPhrase
                  phrases={phrases}
                  setPhrases={setPhrases}
                />
              }
            />

            <Route
              path="/edit/:id"
              element={
                <CreateNewPhrase
                  phrases={phrases}
                  setPhrases={setPhrases}
                />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;