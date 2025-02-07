import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  return (
    <>
      <p className="read-the-docs">
        THE KING IS HERE
      </p>
      <p>Jokes : {jokes.length}</p>
    </>
  )
}

export default App
