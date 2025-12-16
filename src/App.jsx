import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<section>Home (Frases)</section>} />
          <Route path="/new" element={<section>Nueva Frase</section>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
