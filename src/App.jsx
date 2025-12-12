import { useState } from 'react'
import CardTable from './components/CardTable'
import './App.css'


document.title = "Memory-Emoji"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className = "upper-banner">
    <h1 className = "title">Memory Game</h1>
    <p>Select as many pictures as you can without clicking the same one twice</p>
    </div>

      
        <CardTable />
      
    </>
  )
}

export default App
