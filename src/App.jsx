import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<section></section>} />
          <Route path="/new" element={<section></section>} />
        </Routes>
      </main>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;