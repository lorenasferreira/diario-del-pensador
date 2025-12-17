import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useState from"./components/QuotesList";

function App() {

  return (
    <BrowserRouter>
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<section>Home (Frases)</section>} />
          <Route path="/new" element={<section>Nueva Frase</section>} />
        </Routes>
      </main>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
