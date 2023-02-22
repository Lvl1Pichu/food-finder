import { useState } from 'react';
import APITest from './Api-test';
import './App.css';
import ButtonComponent from './ButtonComponent';
import HeaderComponent from './HeaderComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <APITest></APITest>
      <HeaderComponent></HeaderComponent>
      <ButtonComponent label="Click" onClick={() => console.log("Button clicked")} />
    </div>
  )
}

export default App
