import { useState } from 'react'
import './App.css'
import HeaderComponent from './HeaderComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
    </div>
  )
}

export default App
