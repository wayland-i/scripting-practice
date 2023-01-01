import React, { useState } from 'react'

function BirthYearCalculator() {
  
  const initialState = {
      currentAge: "",
      lastYear: "",
      thisYear: ""
  }

  const [birthYear, setBirthYear] = useState(initialState)


  const [answer, setAnswer] = useState();

  const handleFormInput = (e) => {
    const {name, value} = e.target;
    setBirthYear(birthYear => {
      return {...birthYear, [name]: value}
    })

  }

  const handleBirthYearSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    if (birthYear.lastYear === "") {
       setAnswer(today.getFullYear() - birthYear.currentAge);
    } else {
      setAnswer(today.getFullYear() - birthYear.currentAge + 1);
    }
    setBirthYear(initialState);
  }

  return (

    <div className='BirthYearCalculator'>
        <h1>Birth Year <br /> Calculator</h1>
        <h3>When were you born?</h3>
        <form onSubmit={handleBirthYearSubmit}>
            <label htmlFor='currentAge'>Current Age:</label>
            <input name='currentAge' placeholder='your age in years' value={birthYear.currentAge} onChange={handleFormInput}></input>

            <h3>Most recent birthday?</h3>
            <span>
                <label htmlFor='lastYear'>Last Year:</label>
                <input name='lastYear' type='radio' onChange={handleFormInput}></input>

                <label htmlFor='thisYear'>This Year:</label>
                <input name='thisYear' type='radio' onChange={handleFormInput}></input>
            </span>

            <button type='submit' id='birthSubmit'>Submit</button>
        </form>
        {birthYear.currentAge === 0 ? null : <h3>{answer}</h3>}
    </div>
  )
}

export default BirthYearCalculator;