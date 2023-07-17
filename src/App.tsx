import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Album from './components/Album'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Album />
    </>
  )
}

export default App
