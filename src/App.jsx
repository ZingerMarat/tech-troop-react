import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Exercise1 from './components/Exercise1.jsx'
import Exercise2 from './components/Exercise2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Exercise1/> */}
      <Exercise2/>
    </>
  )
}

export default App
