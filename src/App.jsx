import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CardTable from './components/CardTable'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <CardTable />
      
    </>
  )
}

export default App
