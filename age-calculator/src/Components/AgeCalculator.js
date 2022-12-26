import React, { useState } from 'react'

function AgeCalculator() {

    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);
    const [year, setYear] = useState(0);

    const handleMonth = (e) => {
        console.log(e.target.value)
    }
    const handleDay = (e) => {
        console.log(e.target.value)
    }
    const handleYear = (e) => {
        console.log(e.target.value)
    }

  return (
    <div className='AgeCalculator'>
        <h1>Age <br/> Calculator</h1>
        <h3>How old are you?</h3>
        <form>
            <label htmlFor='month'>Month Born:</label>
            <input id='month' placeholder='mm' onChange={handleMonth}></input>
            
            <label htmlFor='day'>Day Born:</label>
            <input id='day' placeholder='dd' onChange={handleDay}></input>

            <label htmlFor='year'>Year Born:</label>
            <input id='year' placeholder='yyyy' onChange={handleYear}></input>
            
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AgeCalculator;