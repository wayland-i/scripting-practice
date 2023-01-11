import { useState } from 'react'
import Button from './components/Button'
import styled from 'styled-components';
import './App.css'


const Nums = styled.input`
    border: none;
    border-bottom: 2px solid black; /* create the bottom line */
    outline: none;
    background-color: transparent;
    margin: 1%;
`

function App() {
  const [numOne, setNumOne] = useState(null);
  const [numTwo, setNumTwo] = useState(null);


  const handleMath = (e) => {
    const operator = e.target.name;
    // console.log(operator);
    
    if (operator === "add") {
      console.log(numOne + numTwo)
    } else if (operator === "subtract") {
      console.log("sub clicked");
    } else if (operator === "divide") {
      console.log("div clicked");
    } else if (operator === "multiply") {
      console.log("mult clicked");
    }
  
  }

  return (
    <div className="App">
      <span style={{ "display": "block", "margin": "5%"}}>
        <Nums></Nums>
        <Nums></Nums>
      </span>
      <Button handleMath={handleMath} name="add"/>
      <Button handleMath={handleMath} name="subtract"/>
      <Button handleMath={handleMath} name="divide"/>
      <Button handleMath={handleMath} name="multiply"/>
    </div>
  )
}

export default App
