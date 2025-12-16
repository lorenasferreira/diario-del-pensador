import { useState } from 'react';
import './App.css';
import NewQuote from './pages/NewQuote';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main>
        
        <section>
        <NewQuote/>
        </section>
          <section></section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
