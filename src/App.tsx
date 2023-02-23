import { useState } from 'react'
import './App.css'
import StartPage from './pages/StartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StartPage></StartPage>
      {/* <HeaderComponent></HeaderComponent>
      <ButtonComponent label="Click" onClick={() => console.log("Button clicked")} /> */}
    </div>
  )
}

export default App
