import { useState } from 'react'
import './App.css'
import MoviesGrid from './components/MoviesGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MoviesGrid/>
    </>
  );
}

export default App
