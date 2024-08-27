import { useState } from 'react'
import './App.css'
import Chess from './Chess'
import { Chessboard } from 'react-chessboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className="w-50 container">
     <Chessboard />
     </div> */}
     <Chess/>
    </>
  )
}

export default App
