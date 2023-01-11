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
    max-width: 8rem;
    font-size: 5rem;
    text-align: center;
`

function App() {
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [result, setResult] = useState("");

  const handleOnChange = (e) => {
    if (e.target.id == 1){
      setNumOne(e.target.value);
    } else if (e.target.id == 2){
      setNumTwo(e.target.value);
    }
  }
  const handleMath = (e) => {
    const operator = e.target.name;
    // console.log(operator);
    
    if (operator === "add") {
      setResult(parseInt(numOne) + parseInt(numTwo));
    } else if (operator === "subtract") {
      setResult(parseInt(numOne) - parseInt(numTwo));
    } else if (operator === "divide") {
      setResult(parseInt(numOne) / parseInt(numTwo));
    } else if (operator === "multiply") {
      setResult(parseInt(numOne) * parseInt(numTwo));
    }

    setTimeout(() => {
      const InputOne = document.getElementById('1');
      const InputTwo = document.getElementById('2');
      InputOne.value = "";
      InputTwo.value = "";
    }, 3000)
  
  }

  return (
    <div className="App">
      <h1 style={{ "margin-bottom": "10%"}}>num 1 (+, -, /, *) num 2</h1>
        <span style={{ "display": "block", "margin": "5%"}}>
          <Nums id='1' onChange={handleOnChange}></Nums>
          <Nums id='2' onChange={handleOnChange}></Nums>
          <span style={{ "display": "block" }}>
            <label htmlFor='1' style={{ "margin-right": "8%"}}>num 1</label>
            <label htmlFor='2' style={{ "margin-left": "5%"}}>num 2</label>
          </span>
        </span>
      <Button handleMath={handleMath} name="add"/>
      <Button handleMath={handleMath} name="subtract"/>
      <Button handleMath={handleMath} name="divide"/>
      <Button handleMath={handleMath} name="multiply"/>

      {result ? <h1>Result: {result}</h1> : <h1>Use my app!</h1>}

    </div>
  )
}

export default App
