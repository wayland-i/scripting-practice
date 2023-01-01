import React, { useState } from 'react'

function BirthYearCalculator() {

  const [birthYear, setBirthYear] = useState({
    currentAge: 0,
    lastYear: "",
    thisYear: ""
  })

  const handleFormInput = (e) => {
    const {name, value} = e.target;
    setBirthYear(birthYear => {
      return {...birthYear, [name]: value}
    })

  }

  const handleBirthYearSubmit = (e) => {
    e.preventDefault();
    const today = new Date
    if (birthYear.lastYear = "") {
      return today.getFullYear - birthYear.currentAge
    } else {
      return today.getFullYear - birthYear.currentAge + 1
    }
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
                <input name='lastYear' type='radio' value="last year" checked={birthYear.lastYear === 'lastYear'} onChange={handleFormInput}></input>

                <label htmlFor='thisYear'>This Year:</label>
                <input name='thisYear' type='radio' value="this year" checked={birthYear.thisYear === 'thisYear'} onChange={handleFormInput}></input>
            </span>

            <button type='submit' id='birthSubmit'>Submit</button>
        </form>
        {}
    </div>
  )
}

export default BirthYearCalculator;