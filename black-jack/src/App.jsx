import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let firstCard = getRandom("first card");
  let secondCard = getRandom("second card");
  const sum = firstCard + secondCard;

  function getRandom(card) {
    const rando = Math.random() * 11
    if (Math.ceil(rando) >= 2) {
      console.log(card + ': ' + Math.ceil(rando))
    } else {
      console.log(card + ': ' + 2);
    }
  }

  return (
    <div className="App">
      
    </div>
  )
}

export default App
