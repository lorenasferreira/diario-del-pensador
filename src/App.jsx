import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuotesList from "./components/QuotesList";
import NewQuote from "./pages/NewQuote/NewQuote";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<QuotesList />} />
            <Route path="/new" element={<NewQuote />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;